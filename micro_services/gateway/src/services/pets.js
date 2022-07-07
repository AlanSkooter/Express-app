const path = require('path');
const fs = require('fs');
const formidable = require('formidable');
const sharp = require('sharp');

exports.fetchAllPets = () => {
    let imagesPets = [];
    const frontendImagesPath = path.resolve(process.cwd(), './public/images/original/');
    const images = fs.readdirSync(frontendImagesPath);
    images.forEach((image) => {
        const ext = image.split('.')[1];
        if (ext == 'jpg' || ext == 'jpeg' || ext == 'png' || ext == 'gif' || ext == 'webp') {
            imagesPets.push(image);
        }
    });
    imagesPets.forEach((imageName) => {
        const image = fs.readFileSync(path.resolve(process.cwd(), './public/images/original/', imageName));
        sharp(image)
        .resize(1000, 600)
        .toFile(path.resolve(process.cwd(), './public/images/', imageName));
    });
    return imagesPets;
}

exports.upload = (req) => new Promise(((resolve, reject) => {
    formidable({
        uploadDir: `${process.cwd()}/public/images/original`,
        multiples: true,
        filename: ($, _, {originalFilename}) => `${originalFilename}`,
    })
        .parse(req, (err) => {
            err ? reject(err) : resolve({code: 200});
        })
}))
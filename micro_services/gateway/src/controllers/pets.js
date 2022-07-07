const petsModel = require('../services/pets');

exports.getPets = async (req, res) => {
    const pets = await petsModel.fetchAllPets();
    res.send(pets);
}

exports.uploadPet = async (req, res) => {
    const success = await petsModel.upload(req);
    res.send(success);
}

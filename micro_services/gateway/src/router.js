const { Router } = require('express');
const mainController = require('./controllers/main');
const petsController = require('./controllers/pets');
const usersController = require('./controllers/users');
const asyncErrorHandler = require('./utils/async-error-handler');
const { checkAuth } = require('./services/auth');

const router = Router();

router.get('/', mainController);
router.get('/pets/images/', asyncErrorHandler(petsController.getPets));
router.post('/reg', asyncErrorHandler(usersController.addNewUser));
router.post('/login', asyncErrorHandler(usersController.loginUser));
router.post('/image/upload', checkAuth, asyncErrorHandler(petsController.uploadPet));

module.exports = router;
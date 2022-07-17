const Router = require('@koa/router');
const usersHandler = require('./handlers/users');
const messagesHendler = require('./handlers/messages');
const usersSchemas = require('./schemas/users');
const validationMiddleware = require('./middleware/validation-middleware');

const router = new Router();

router.post('/reg', validationMiddleware(usersSchemas.createUser), usersHandler.createNewUser);
router.post('/login', validationMiddleware(usersSchemas.loginUser), usersHandler.findUserByLogin);
router.post('/chat', messagesHendler.createNewMessage);
  
module.exports = router;
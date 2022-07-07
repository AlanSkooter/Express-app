const Router = require('@koa/router');
const usersHandler = require('./handlers/users');

const router = new Router();

router.post('/reg', usersHandler.createNewUser);
router.post('/login', usersHandler.findUserByLogin);
  
  module.exports = router;
const Koa = require('koa');
const router = require('./router');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const port = 4000;

app.use(bodyParser());
app.use(router.routes());

app.listen(port, () => {
    console.log(`Koa app listening on port ${port}`);
  });
const Koa = require('koa');
const bodyParser = require('koa-bodyparser')
const cors = require('koa-cors')
const route = require('koa-route')
const app = new Koa();

app.use(cors())
app.use(bodyParser())

app.use(
    route.get('/cuisineList',async (ctx)=>{
        const {url,query} = ctx
        const request = ctx.request
        console.log(query.size)
        ctx.body = JSON.stringify({code:200,data:[1,2,3]});
    })
);

app.listen(3001);
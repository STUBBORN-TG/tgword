const Koa =require('koa')
const app = new Koa()

const conf=require('./config')

app.use(ctx=>{
    ctx.body='hello tgword'
})

app.listen(conf.server.PORT,()=>{
    console.log(`server run at http://localhost:${conf.server.PORT}`)
})
const Koa = require("koa");
const Router = require("koa-router");
const static = require("koa-static");
const views = require("koa-views");
const fs = require("fs");
const Body = require("koa-body")
let app = new Koa();
let router = new Router();
app.use(views(__dirname+"/"));
router.get("/",async function(ctx,next){
    console.log("wolaile")
    await ctx.render("index");
});
router.get("/get",async function(ctx,next){
    ctx.body = "我在请求服务器"
});
app.use(router.routes())
app.listen(4444);
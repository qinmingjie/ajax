const Koa = require("koa");
const Router = require("koa-router");
const static = require("koa-static");
const views = require("koa-views");
const fs = require("fs");
const Body = require("koa-body")
const userData = require("./static/data.json")
let app = new Koa();
let router = new Router();
app.use(Body());
app.use(views(__dirname+"/views"));
router.post("/ajax",async function(ctx,next){
    console.log(ctx.request.body)
    let name = ctx.request.body.username;
    if(name == userData[0].name){
        ctx.body = {
            status:1,
            txt:"用户名正确"
        }
    }else{
        ctx.body = {
            status:0,
            txt:"用户名错误"
        }
    }
});
router.get("/",async function(ctx,next){
    console.log("wolaile")
    await ctx.render("index");
});
app.use(router.routes())
app.listen(4444);
const Koa = require("koa");
const Router = require("koa-router");
const static = require("koa-static");
const views = require("koa-views");
const fs = require("fs");
const userData = require("./static/data.json")
let app = new Koa();
let router = new Router();
app.use(views(__dirname+"/views"));
router.get("/ajax",async function(ctx,next){
    let name = ctx.query.username;
    // console.log(name)
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
router.post("/",async function(ctx,next){
    // let txt = fs.readFileSync("./views/index.html").toString()
    await ctx.render("index");
});
app.use(router.routes())
app.listen(4444);
const Koa = require("koa");
const Router = require("koa-router");
const views = require("koa-views");
const static = require("koa-static");
const Body = require("koa-body");
const fs = require("fs");
let app = new Koa();
let router = new Router();
app.use(Body(
    {multipart:true}
))
app.use(views(__dirname + "/views"))
app.use(static(__dirname + "/static"))
router.get("/",async function(ctx,next){
    await ctx.render("index")
})
router.post("/post",async function(ctx,next){
    // console.log(ctx.request.body);
    //获取上传文件信息
    let file = ctx.request.files.img;
    //获取上传文件保存路径
    let path = file.path;
    //读取上传文件内容
    let fileData = fs.readFileSync(path)
    //将读取到的内容写入文件
    fs.writeFileSync("./static/"+file.name,fileData)
    ctx.body = "拿到数据"
})
app.use(router.routes())
app.listen(8887);

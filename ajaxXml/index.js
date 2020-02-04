const Koa = require("koa");
const Router = require("koa-router");
const views = require("koa-views");
let app = new Koa();
let router = new Router();
app.use(views(__dirname + "/views"));
router.get("/", async function(ctx,next){
    await ctx.render("index")
})
router.get("/get",async function(ctx,next){
    ctx.set("content-type","text/xml")
    ctx.body =  `<?xml version='1.0' encoding='utf-8' ?>
                    <presons>
                        <boy>
                            <name>秦明杰</name>
                            <age>23</age>
                        </boy>
                        <girl>
                            <name>nothing</name>
                            <age>nothing</age>
                        </girl>
                    </presons>

    `
})
app.listen(4343);
app.use(router.routes())

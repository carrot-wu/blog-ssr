import "module-alias/register"
import * as Koa from 'koa'
import Next from 'next'
import errorHandler from '@server/middlewares/errorHandler';
import proxyMiddleware from '@server/middlewares/proxy';
import getRoute from "@server/route";
const port = 9999
const server = new Koa()

const dev = process.env.NODE_ENV !== 'production'
const app = Next({ dev })
const handle = app.getRequestHandler()
// 获取自定义路由
const route = getRoute(app)

app.prepare().then(() => {
  server.use(errorHandler)
  server.use(route.routes())
  if(dev){
    server.use(proxyMiddleware)
  }
  server.use(async (ctx) => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })
  server.listen(port, () => {
    console.log(`koa server listening on ${port}`)
  })
})

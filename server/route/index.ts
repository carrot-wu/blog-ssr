import * as KoaRouter from 'koa-router';
import Server from "next/dist/next-server/server/next-server";
import routerArray from '@src/routers';

const router = new KoaRouter()

function getRoute(app: Server): KoaRouter {
  routerArray.forEach(routeObject => {
    const { path: routePath, page } = routeObject
    // next.js不支持 /xx/:id这样子的路由路径
    // 只支持/xx?id=id这样子的路径
    // 所以我们在koa服务端这边做处理
    router.get(routePath, async ctx => {
      const { req, res, params, path } = ctx
      // 如果匹配到：字符 那么就去掉这个字符
      if(/\/:/.test(routePath)){

      }
      await app.render(req, res, page || path, params)
    })
  })
  return router
}
export default getRoute

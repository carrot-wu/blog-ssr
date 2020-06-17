import * as KoaRouter from 'koa-router';
import routerArray from './config';

const router = new KoaRouter()

function getRoute(handle: any): KoaRouter {
  routerArray.forEach(routeObject => {
    const { path: routePath, page } = routeObject
    // next.js不支持 /xx/:id这样子的路由路径
    // 只支持/xx?id=id这样子的路径
    // 所以我们在koa服务端这边做处理
    router.get(routePath, async ctx => {
      const { req, res, params, path } = ctx
      await handle(req, res, {
        pathname: page || path,
        query: params
      })
      ctx.respond = false
    })
  })
  return router
}
export default getRoute

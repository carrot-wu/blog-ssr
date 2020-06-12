import * as KoaRouter from 'koa-router';
import Server from "next/dist/next-server/server/next-server";
import routerArray from '@src/routers';

const router = new KoaRouter()

function getRoute(app: Server): KoaRouter {
  routerArray.forEach(routeObject => {
    const { path, page } = routeObject
    router.get(path, async ctx => {
      const { req, res, params, path } = ctx
      await app.render(req, res, page || path, params)
    })
  })
  return router
}
export default getRoute

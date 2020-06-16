import * as Koa2ProxyMiddleware from "koa2-proxy-middleware";
const options: Koa2ProxyMiddleware.Koa2ProxyMiddlewareConfig = {
  targets: {
    '/api/(.*)': {
      // this is option of http-proxy-middleware
      target: 'https://api.carrotwu.com/', // target host
      changeOrigin: true, // needed for virtual hosted sites
    }
  }
}

export default Koa2ProxyMiddleware(options)

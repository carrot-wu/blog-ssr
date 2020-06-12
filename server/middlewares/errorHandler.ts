import { Context } from 'koa';
import HttpError from '../utils/httpError';
import injectEnv from '../config/env';


export default async function errorHandler(ctx: Context, next: any): Promise<any> {
  try {
    await next()
  } catch (error) {
    const isHttpError: boolean = error instanceof HttpError
    // 如果是自定义错误实例 那么就是已知错误
    if (isHttpError) {
      const {resultMsg, status, resultCode} = error
      // 修改返回给客户端的数据
      ctx.body = {
        resultMsg,
        resultCode
      }
      ctx.status = status
    } else {
      // 未知错误 统一成服务器报错
      ctx.body = {
        resultMsg: '服务器出了问题，请联系管理员！',
        resultCode: 999
      }
      ctx.status = 500
    }
    if (!isHttpError && injectEnv.showError) {
      throw error
    }
  }
}

import { ResponseConfig } from '../type'

interface ParamsErrorConfig {
  resultCode?: number;
  resultMsg?: string;
  status?: number;
  data?: any;
}
export default class HttpError extends Error {
  public resultCode: number;

  public resultMsg: string;

  public status: number;

  public data: any;

  public constructor(config: ResponseConfig) {
    const { resultCode, resultMsg, status, data = null } = config
    super(resultMsg)
    this.resultCode = resultCode
    this.resultMsg = resultMsg
    this.status = status
    this.data = data
    Object.setPrototypeOf(this, HttpError.prototype)
  }
}

// 参数错误
export class ParamsError extends HttpError {
  public constructor(config: ParamsErrorConfig = {}) {
    const {
      resultCode = 400,
      resultMsg = '参数错误',
      status = 400,
      data
    } = config
    super({ resultCode, resultMsg, status, data })
  }
}

// 验证错误
export class AuthError extends HttpError {
  public constructor(config: ParamsErrorConfig = {}) {
    const {
      resultCode = 401,
      resultMsg = '用户名或者密码不正确',
      status = 401,
      data
    } = config
    super({ resultCode, resultMsg, status, data })
  }
}

// 查找404
export class NotFountError extends HttpError {
  public constructor(config: ParamsErrorConfig = {}) {
    const {
      resultCode = 404,
      resultMsg = '查找失败',
      status = 404,
      data
    } = config
    super({ resultCode, resultMsg, status, data })
  }
}

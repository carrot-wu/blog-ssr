import {NextPageContext} from "next";
import {Store} from "redux";

export interface IResponseConfig<T = any> {
  resultCode: number
  resultMsg: string
  status: number
  data: T
}

// 获取函数的参数类型
export type ReturnParamsType<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : any;

export interface GetInitialPropsContext extends NextPageContext {
  reduxStore: Store
}

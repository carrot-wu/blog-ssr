import { Context } from 'koa'

type methods = 'get' | 'post' | 'put' | 'patch' | 'delete'

export interface RouterInterface {
  path: string;
  methods: methods;
  controller(ctx: Context, next: any): void;
}

export interface ResponseConfig {
  resultMsg: string;
  resultCode: number;
  status: number;
  data?: any;
}

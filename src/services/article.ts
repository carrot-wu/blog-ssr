import request from '@src/utils/request';
import { GetArticleListRes, GetArticleDetailRes } from '@src/types/article';

export interface GetArticleListParams {
  pageNum: number;
  pageSize: number;
  tag?: string;
}
export interface GetArticleDetailParams {
  id: string;
}
export function getArticleList(params: GetArticleListParams) {
  return request.get<GetArticleListRes>('article/getArticleList', {
    ...params
  });
}

export function getArticleById(params: GetArticleDetailParams) {
  return request.get<GetArticleDetailRes>('article/findArticleById', {
    ...params
  });
}

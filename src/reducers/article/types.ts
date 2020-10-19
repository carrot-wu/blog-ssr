import { ArticleListItem } from '@src/types/article';
export interface ArticleMap {
  [index: number]: ArticleListItem;
}

export interface ArticleDefaultState {
  articleIdList: number[];
  articleMap: ArticleMap;
}

// action type
export const UPD_ARTICLE_LIST = 'UPD_ARTICLE_LIST';
export const RESET_ARTICLE_LIST = 'RESET_ARTICLE_LIST';

// action

// 缓存文章列表action
export interface UpdArticleAction {
  type: typeof UPD_ARTICLE_LIST;
  payload: {
    articleList: ArticleListItem[];
  };
}

// 清除文章列表action
export interface ResetArticleAction {
  type: typeof RESET_ARTICLE_LIST;
}
export type ArticleActionType = UpdArticleAction | ResetArticleAction;

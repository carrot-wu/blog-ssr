import { getArticleList, GetArticleListParams } from '@src/services/article';
import { RESET_ARTICLE_LIST, ResetArticleAction, UPD_ARTICLE_LIST, UpdArticleAction } from './types';
import { ArticleListItem } from '@src/types/article';
import { Action } from 'redux';
import { AppState } from '../index';
import { ThunkAction } from 'redux-thunk';

//actionCreator
export function updArticle(articleList: ArticleListItem[]): UpdArticleAction {
  return {
    type: UPD_ARTICLE_LIST,
    payload: { articleList }
  };
}

// 清除文章列表
export function resetArticle(): ResetArticleAction {
  return {
    type: RESET_ARTICLE_LIST
  };
}
// action
export const thunkUpdArticle = (
  params: GetArticleListParams
): ThunkAction<void, AppState, null, Action<typeof UPD_ARTICLE_LIST>> => async (dispatch) => {
  const { data } = await getArticleList(params);
  dispatch(updArticle(data.list));
  return data;
};

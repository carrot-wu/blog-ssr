import {
  ArticleActionType,
  UPD_ARTICLE_LIST,
  RESET_ARTICLE_LIST,
  ArticleDefaultState,
  ArticleMap
} from './types';

const defaultState: ArticleDefaultState = {
  articleIdList: [],
  articleMap: {}
};

export default function articleReducer(state = defaultState, action: ArticleActionType): ArticleDefaultState {
  switch (action.type) {
    // 扁平化缓存文章数据
    case UPD_ARTICLE_LIST:
      const { articleList } = action.payload;
      const articleMap = articleList.reduce((obj, cur) => {
        obj[cur.id] = cur;
        return obj;
      }, {} as ArticleMap);
      return {
        articleIdList: [...state.articleIdList, ...articleList.map((article) => article.id)],
        articleMap: { ...state.articleMap, ...articleMap }
      };
    case RESET_ARTICLE_LIST:
      return {
        articleIdList: [],
        articleMap: { ...state.articleMap }
      };
    default:
      return state;
  }
}

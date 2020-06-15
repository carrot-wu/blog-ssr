import {RESET_TAG_LIST, TagActionType, TagDefaultState, TagMap, UPD_TAG_LIST} from './types'

const defaultState: TagDefaultState = {
  tagList: [],
  tagMap: {}
}

export default function articleReducer(state = defaultState, action: TagActionType): TagDefaultState {
  switch (action.type) {
    case UPD_TAG_LIST:
      const {tagList} = action.payload
      const tagMap = tagList.reduce((obj,cur) => {
        obj[cur.name] = cur
        return obj
      }, {} as TagMap)
      return {
        tagList: [...state.tagList, ...tagList.map(article => article.name)],
        tagMap: {...state.tagMap, ...tagMap}
      };
    case RESET_TAG_LIST:
      return {
        tagList: [],
        tagMap: {...state.tagMap}
      };
    default:
      return state
  }
}


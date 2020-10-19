import { TagItem } from '@src/types/tag';
export interface TagMap {
  [index: string]: TagItem;
}

export interface TagDefaultState {
  tagList: string[];
  tagMap: TagMap;
}
// action type
export const UPD_TAG_LIST = 'UPD_TAG_LIST';
// 清除tagList
export const RESET_TAG_LIST = 'RESET_TAG_LIST';

// action
export interface UpdTagAction {
  type: typeof UPD_TAG_LIST;
  payload: {
    tagList: TagItem[];
  };
}

export interface ResetTagAction {
  type: typeof RESET_TAG_LIST;
}

export type TagActionType = UpdTagAction | ResetTagAction;

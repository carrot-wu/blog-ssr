import request from '@src/utils/request';
import { TagItem } from '@src/types/tag';

export function getTagList() {
  return request.get<TagItem[]>('tag/getTagList');
}

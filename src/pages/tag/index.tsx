import React, {useCallback, useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import './styles.scss'
import {AppState} from "@src/reducers";
import {TagDefaultState} from "@src/reducers/tag/types";
import {TagItem} from "@src/types/tag";
import {thunkUpdTag} from "@src/reducers/tag/actions";
import {Header, Link} from "@src/components";


const Tag: React.FC = () => {
  const dispatch = useDispatch()
  const history = useRouter()
  const {
    tagList,
    tagMap
  } = useSelector<AppState, TagDefaultState>(state => state.tag)
  const getTagList = useCallback(
    async () => dispatch(thunkUpdTag() as unknown as Promise<TagItem[]>) ,
    [dispatch]
  )
  // 跳转详情
  const goPost = useCallback((id) => {
    return () => history.push(`/post/${id}`)
  }, [history])

  useEffect(() => {
    getTagList()
    // eslint-disable-next-line
  }, [])
  return (
    <div className="tag-wrapper">
      <Header/>
      <div className="tag-content">
        <div className="tag-title">全部分类</div>
        <div className="tag-center">
          <div className="tag-list">
            {
              tagList.map(tag => (
                <Link
                  className="tag-item"
                  key={tag}
                  to={`/tag/${tagMap[tag].value}`}
                >
                  {tag}
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
export default Tag

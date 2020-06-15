import React, {useCallback, useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import './styles.scss'
import {AppState} from "@src/reducers";
import {TagDefaultState} from "@src/reducers/tag/types";
import {TagItem} from "@src/types/tag";
import {thunkUpdTag, updTag} from "@src/reducers/tag/actions";
import {Header, Link} from "@src/components";
import {NextPage} from "next";
import {GetInitialPropsContext} from "@src/type";
import {getTagList} from "@src/services/tag";

interface TagServerProps {
  serverList?: TagItem[]
}

const Tag: NextPage<TagServerProps> = (props) => {
  const dispatch = useDispatch()
  const {
    tagList,
    tagMap
  } = useSelector<AppState, TagDefaultState>(state => state.tag)
  const getTagList = useCallback(
    async () => dispatch(thunkUpdTag() as unknown as Promise<TagItem[]>),
    [dispatch]
  )

  useEffect(() => {
    if (Array.isArray(tagList) && tagList.length) {
      return
    }
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

Tag.getInitialProps = async (context: GetInitialPropsContext) => {
  const {reduxStore} = context
  const {data} = await getTagList()
  reduxStore.dispatch(updTag(data))
  return {
    serverList: data
  }

}
export default Tag

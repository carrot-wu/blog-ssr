import React, {useCallback} from 'react'
import {useRouter, } from 'next/router'
import useInfinite, {LoadFnInterface} from "@src/hooks/useInfinite";
import {ArticleListItem} from '@src/types/article'
import {BottomBar, Banner, Header, Button, Loading, BottomLine, Article} from "@src/components/index"
import './style.scss'
import { getArticleList} from "@src/services/article";

const Index: React.FC = () => {
  const history = useRouter()
  let { key } = useParams()

  const getArticleListFn = useCallback<LoadFnInterface<ArticleListItem>>(
    async ({pageSize, pageNum}) =>  {
      const { data } = await getArticleList({pageSize, pageNum, tag: key})
      return data
    },
    [key]
  )
  //封装分页详情
  const {load, hasMore, loading, list} = useInfinite(
    getArticleListFn,
    {pageSize: 5, immediate: true})
  // 跳转详情
  const goPost = useCallback((id) => {
    return () => history.push(`/post/${id}`)
  }, [history])
  return (
    <div className="home">
      <Header/>
      <Banner/>
      <div className="homeContent">
        {list.map(article => (
          <Article key={article.id} {...article} onClick={goPost(article.id)}/>
        ))}
        <div className="loadBar">
          {loading ? (
            <Loading>加载中...</Loading>
          ) : (
            hasMore ? (
              <Button onClick={load} >加载更多</Button>
            ) : <BottomLine lineWidth={100}/>
          )
          }
        </div>
      </div>
      <BottomBar/>
    </div>
  )
}
export default Index

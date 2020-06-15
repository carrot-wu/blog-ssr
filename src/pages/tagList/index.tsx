import React, {useCallback} from 'react'
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {useRouter,} from 'next/router'
import useInfinite, {LoadFnInterface} from "@src/hooks/useInfinite";
import {ArticleListItem} from '@src/types/article'
import {BottomBar, Banner, Header, Button, Loading, BottomLine, Article} from "@src/components/index"
import './style.scss'
import {getArticleList} from "@src/services/article";

interface TagListServerProps {
  serverSucceed: boolean;
  serverPageNum: number;
  serverHasMore: boolean;
  serverList?: ArticleListItem[]
}

export const getServerSideProps: GetServerSideProps<TagListServerProps> = async (context) => {
  const {query} = context
  const {key} = query
  let pageNum = 1
  let hasMore = true
  let list: ArticleListItem[]
  const {data} = await getArticleList({
    pageNum,
    pageSize: 5,
    tag: key as string
  })

  if (data.totalPage <= pageNum) {
    hasMore = false
  }
  pageNum += 1
  list = data.list

  return {
    props: {
      serverSucceed: true,
      serverPageNum: pageNum,
      serverHasMore: hasMore,
      serverList: list
    }
  }

}

const TagList: React.FC<InferGetServerSidePropsType<typeof getServerSideProps>> = (props) => {
  const {serverPageNum, serverSucceed, serverHasMore, serverList = []} = props
  const router = useRouter()
  const key = router.query.key as string

  const getArticleListFn = useCallback<LoadFnInterface<ArticleListItem>>(
    async ({pageSize, pageNum}) => {
      const {data} = await getArticleList({pageSize, pageNum, tag: key})
      return data
    },
    [key]
  )
  //封装分页详情
  const {load, hasMore, loading, list} = useInfinite(
    getArticleListFn,
    {
      pageSize: 5,
      immediate: !serverSucceed,
      defaultPage: serverPageNum,
      hasMore: serverHasMore,
      defaultList: serverList,
      defaultLoading: !serverSucceed
    })

  // 跳转详情
  const goPost = useCallback((id) => {
    return () => router.push(`/post/${id}`)
  }, [router])
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
              <Button onClick={load}>加载更多</Button>
            ) : <BottomLine lineWidth={100}/>
          )
          }
        </div>
      </div>
      <BottomBar/>
    </div>
  )
}

export default TagList

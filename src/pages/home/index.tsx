import React, {useCallback, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useRouter} from 'next/router'
import {AppState} from "@src/reducers"
import useInfinite, {LoadFnInterface} from "@src/hooks/useInfinite";
import {resetArticle, thunkUpdArticle, updArticle} from "@src/reducers/article/actions"
import {BottomBar, Banner, Header, Button, Loading, BottomLine, Article} from "@src/components"
import './style.scss'
import {getArticleList} from "@src/services/article";
import {NextPage} from "next";
import {GetInitialPropsContext} from "@src/type";
import {ArticleDefaultState} from '@src/reducers/article/types'
import {ArticleListItem, GetArticleListRes} from '@src/types/article'
import {useTitle} from "@src/hooks";

interface HomeServerProps {
  serverSucceed: boolean;
  serverPageNum: number;
  serverHasMore: boolean;
  serverList?: ArticleListItem[]
}

const Home: NextPage<HomeServerProps> = (props) => {
  useTitle('首页')
  const dispatch = useDispatch()
  const history = useRouter()
  const {serverPageNum, serverHasMore, serverSucceed} = props
  // 获取state article信息
  const {
    articleIdList,
    articleMap
  } = useSelector<AppState, ArticleDefaultState>(state => state.article)
  const articleList = articleIdList.map(id => articleMap[id])
  //定义无线加载类型
  const getArticleList = useCallback<LoadFnInterface<ArticleListItem>>(
    async ({pageSize, pageNum}) => dispatch(thunkUpdArticle({
      pageNum,
      pageSize
    }) as unknown as Promise<GetArticleListRes>),
    [dispatch]
  )
  //封装分页详情
  const {load, hasMore, loading} = useInfinite(
    getArticleList,
    {
      pageSize: 5,
      immediate: !serverSucceed,
      hasMore: serverHasMore,
      defaultPage: serverPageNum,
      defaultLoading: !serverSucceed
    }
  )

  // 跳转详情
  const goPost = useCallback((id) => {
    // 因为post的关系所以这边直接作为query传入就可以了
    return () => history.push({
      pathname: '/post',
      query: {
        id
      }
    })
  }, [history])

  useEffect(() => {
    // 组件卸载完成之后清除redux里的数据
    return () => {
      dispatch(resetArticle())
    }
  }, [])
  return (
    <div className="home">
      <Header/>
      <Banner/>
      <div className="homeContent">
        {articleList.map(article => (
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

Home.getInitialProps = async (context: GetInitialPropsContext) => {
  const {reduxStore} = context
  let pageNum = 1
  let hasMore = true
  let list: ArticleListItem[]
  const {data} = await getArticleList({
    pageNum,
    pageSize: 5
  })
  if (data.totalPage <= pageNum) {
    hasMore = false
  }
  pageNum += 1
  list = data.list
  reduxStore.dispatch(updArticle(list))
  return {
    serverSucceed: true,
    serverPageNum: pageNum,
    serverHasMore: hasMore,
    serverList: list
  }

}

export default Home

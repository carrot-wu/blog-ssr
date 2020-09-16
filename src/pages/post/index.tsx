import React, {useEffect, useMemo} from "react"
import {GetServerSideProps, InferGetServerSidePropsType} from 'next'
import marked from 'marked'
import {useRouter} from "next/router";
import Prism from 'prismjs'
import useFormatDate from "@src/hooks/useFormatDate";
import {Loading, Comment} from "@src/components";
import {IResponseConfig} from "@src/type";
import {GetArticleDetailRes} from "@src/types/article";
import {usePromise, useTitle} from '@src/hooks/index'
import {getArticleById} from '@src/services/article'
import './styles.scss'
import '@carrotwu/generatoc/src/style/main.css';
import {isBrowser} from "@src/config/constants";

interface ServerArticleProps {
  serverArticleData?: IResponseConfig<GetArticleDetailRes>;
  // 服务端请求是否成功
  serverSucceed: boolean;
}

const gecContent = '.content';
const gecHeading = ['h2', 'h3', 'h4', 'h5'];
const gecSelector = '#toc';

marked.setOptions({
  highlight(code: string, lang: any) {
    return Prism.highlight(code, Prism.languages[lang], lang)
  }
})

export const getServerSideProps: GetServerSideProps<ServerArticleProps> = async (context) => {
  const {query} = context
  const {id} = query
  let articleData
  if (id) {
    articleData = await getArticleById({id: id as string})
  }
  return {
    props: {
      serverArticleData: articleData,
      serverSucceed: true
    }
  }
}

const Post: React.FC<InferGetServerSidePropsType<typeof getServerSideProps>> = (props) => {
  const {serverArticleData, serverSucceed} = props
  const router = useRouter()
  const id = router.query.id as string
  const {promiseFn: getArticleDetail, res: {data}, loading} = usePromise(
    async (id: string) => getArticleById({id}),
    [id],
    {defaultData: serverArticleData, defaultLoading: !serverSucceed}
  );
  const {title, content = '', createdStamp} = data
  const time = useFormatDate(createdStamp)
  // 修改标题
  useTitle(title)
  useEffect(() => {
    if (!id) {
      //不存在id
      router.replace('/home')
    } else {
      // 如果服务端请求成功了 那么直接返回即可
      if (serverSucceed) {
        return
      }
      getArticleDetail(id)
    }
    // eslint-disable-next-line
  }, [id])
  useEffect(() => {
    if (isBrowser) {
      (async function initGeneratoc() {
        const generatoc = (await import('@carrotwu/generatoc')).default
        generatoc.destroy();
        generatoc.init({
          content: gecContent,
          heading: gecHeading,
          selector: gecSelector,
          scrollElement: '.content'
        });
      })()
    }
  });

  const html = useMemo(() => marked(content), [content])
  return (
    <div className="content">
      {loading ?
        <div className="post-loading">
          <Loading size={50}>文章加载中</Loading>
        </div>
        :
        <div className="post">
          <div className="title">{title}</div>
          <div className="byline">
            <div className="author">carrotWu</div>
            <div className="time">{time}</div>
          </div>
          <div className="markdown-body" dangerouslySetInnerHTML={{__html: html}}/>
          <Comment postId={id}/>
          <div id="toc"/>
        </div>
      }

    </div>
  )
}
export default Post

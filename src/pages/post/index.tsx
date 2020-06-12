import React, {useEffect, useMemo} from "react"
import marked from 'marked'
import useFormatDate from "@src/hooks/useFormatDate";
import {Loading} from "@src/components/index";
import {useRouter} from "next/router";
import {usePromise, useTitle} from '@src/hooks/index'
import {getArticleById} from '@src/services/article'
import './styles.scss'

const Prism = window && window.Prism
marked.setOptions({
  highlight(code: string, lang: any) {
    return Prism.highlight(code, Prism.languages[lang], lang)
  }
})
const Index:React.FC = () => {
  const router = useRouter()
  // todo
  const id = router.query.id as string
  const { promiseFn: getArticleDetail, res: {data}, loading } = usePromise(
    async (id: string) => getArticleById({id}),
    [id]
  );
  const {title, content = '', createdStamp} = data
  const time = useFormatDate(createdStamp)
  // 修改标题
  useTitle(title)
  useEffect(() => {
    if(!id){
      //不存在id
      router.replace('/home')
    }else {
      getArticleDetail(id)
    }
    // eslint-disable-next-line
  }, [id])

  const html = useMemo(() => marked(content),[content])
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
          <div className="markdown-body" dangerouslySetInnerHTML={{__html:html}}/>
        </div>
      }

    </div>
  )
}
export default Index

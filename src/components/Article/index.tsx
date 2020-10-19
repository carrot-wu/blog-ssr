import React, { memo, useMemo } from 'react';
import useFormatDate from '@src/hooks/useFormatDate';
import './style.scss';
import { ArticleListItem } from '@src/types/article';
import { Link } from '@src/components';

interface ArticleItemProps extends ArticleListItem {
  onClick: (id: number) => void;
}
interface ImgWrapperStyle {
  backgroundImage: string;
  [index: string]: string | number;
}

const Article: React.FC<ArticleItemProps> = (props) => {
  const { title, id, access, abstract, imgSrc, createdStamp } = props;
  const imgStyle = useMemo<ImgWrapperStyle>(() => {
    return { backgroundImage: `url(${imgSrc})` };
  }, [imgSrc]);

  const time = useFormatDate(createdStamp);
  return (
    <article className="article">
      <div className="title" onClick={() => props.onClick(id)}>
        {title}
      </div>
      <div className="detail">
        <div className="iconWrapper">
          <span className="iconfont icon-author" />
          <span>carrotwu</span>
        </div>
        <div className="iconWrapper">
          <span className="iconfont icon-access" />
          <span>{`浏览${access}次`}</span>
        </div>
        <div className="iconWrapper">
          <span className="iconfont icon-rili" />
          <span>{time}</span>
        </div>
      </div>
      {imgSrc && <div className="imgWrapper" style={imgStyle} onClick={() => props.onClick(id)} />}
      <div className="abstract">{abstract}</div>
      <div className="read-more">
        <Link to={`/post/${id}`}>查看更多</Link>
      </div>
    </article>
  );
};
export default memo(Article);

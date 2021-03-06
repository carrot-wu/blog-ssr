import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import './styles.scss';
import avatar from '@src/assets/images/avatar.jpg';
import { BottomBar, Button } from '@src/components';
import { useTitle } from '@src/hooks';

const Blog: React.FC = () => {
  useTitle('博客列表');
  const history = useRouter();
  const goHome = useCallback(() => {
    history.push('/home');
  }, [history]);
  return (
    <div className="blog-index">
      <div className="blog-content">
        <img src={avatar} alt="" className="blog-avatar" />
        <p className="blog-detail">嗨，我是吴泓锐 (carrotwu)，一名前端开发者。</p>
        <Button onClick={goHome}>进入博客</Button>
        <div className="blog-navigate">
          <a
            href="https://github.com/carrot-wu"
            className="blog-navigateItem"
            target="_blank"
            title="carrotwu github"
            rel="noopener noreferrer"
          >
            <i className="iconfont icon-github" />
          </a>
          <a
            href="https://weibo.com/p/1005053824521615/home"
            className="blog-navigateItem"
            target="_blank"
            title="carrotwu 微博"
            rel="noopener noreferrer"
          >
            <i className="iconfont icon-weibo" />
          </a>
        </div>
      </div>
      <BottomBar />
    </div>
  );
};
export default Blog;

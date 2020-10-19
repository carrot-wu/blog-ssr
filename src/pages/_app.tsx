import { AppContext, AppProps } from 'next/app';
import React from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import './index.scss';
import '@src/iconfont/iconfont.css';
import 'github-markdown-css';
//import '@src/utils/prism'
import withReduxHoc from '@src/utils/withReduxHoc';
import { isFunction } from '@src/utils/checkType';

interface BlogAppProps extends AppProps {
  reduxStore: Store;
}

const BlogApp: React.FC<BlogAppProps> = ({ Component, pageProps, reduxStore }) => {
  return (
    <Provider store={reduxStore}>
      <Component {...pageProps} />
    </Provider>
  );
};

//@ts-ignore
BlogApp.getInitialProps = async (appContext: AppContext) => {
  const { Component } = appContext;
  let pageProps = {};
  if (isFunction(Component.getInitialProps)) {
    //@ts-ignore
    pageProps = await Component.getInitialProps(appContext);
  }
  return {
    pageProps
  };
};
export default withReduxHoc(BlogApp);

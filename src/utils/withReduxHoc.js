import React from 'react'
import { isBrowser } from '@src/config/constants'
import getStore from '@src/store'
import { isFunction } from '@src/utils/checkType'

const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__'

function getOrCreateStore (initialState) {
  if (!isBrowser) {
    // 服务端每次执行都重新创建一个store
    return getStore(initialState)
  }
  // 在客户端执行这个方法的时候 优先返回window上已有的store
  // 而不能每次执行都重新创建一个store 否则状态就无限重置了
  if (!window[__NEXT_REDUX_STORE__]) {
    //@ts-ignore
    window[__NEXT_REDUX_STORE__] = getStore(initialState)
  }
  return window[__NEXT_REDUX_STORE__]
}

export default function withReduxHoc(AppComponent) {
  class WithReduxApp extends React.Component {
    constructor (props) {
      super(props)
      this.reduxStore = getOrCreateStore(props.initialReduxState)
    }

    render () {
      const { Component, pageProps, ...rest } = this.props
      return (
        <AppComponent
          {...rest}
          Component={Component}
          pageProps={pageProps}
          reduxStore={this.reduxStore}
        />
      )
    }
  }

  WithReduxApp.getInitialProps = async (ctx) => {
    let reduxStore  = getOrCreateStore()

    ctx.reduxStore = reduxStore

    let appProps = {}
    //@ts-ignore
    if (isFunction(AppComponent.getInitialProps)) {
      //@ts-ignore
      appProps = await AppComponent.getInitialProps(ctx)
    }

    return {
      ...appProps,
      initialReduxState: reduxStore.getState()
    }
  }
  return WithReduxApp
}

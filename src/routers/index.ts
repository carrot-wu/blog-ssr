export interface IRoute {
  key: string;
  name: string;
  path: string;
  page: string;
}

const routerArray: IRoute[] = [
  {
    name: '首页',
    path: '/',
    key: 'index',
    page: '/blog'
  },
  {
    name: '博客',
    path: '/home',
    key: 'home',
    page: '/home'
  },
  {
    name: '详情',
    path: '/post/:id',
    key: 'post',
    page: '/post'
  },
  {
    name: '分类',
    path: '/tag',
    key: 'tag',
    page: '/tag'
  },
  {
    name: '分类列表',
    path: '/tag/:key',
    key: 'tagList',
    page: '/tagList'
  },
  {
    name: '关于她',
    path: '/love',
    key: 'love',
    page: '/love'
  }
]
export default routerArray

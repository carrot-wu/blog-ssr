import Request from './http';
import { isBrowser } from '@src/config/constants';

// todo 这边还可以做拆分 抽成公共配置
const request = new Request({
  defaults: {
    baseURL: isBrowser ? '/api' : 'https://www.carrotwu.com/api'
  }
});
export default request;

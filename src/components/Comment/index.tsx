import React, { PureComponent } from 'react';
import './styles.scss';
import { isBrowser, valineAppId, valineAppKey } from '@src/config/constants';
import avatar from '@src/assets/images/avatar.jpg';
interface CommentProps {
  postId: number | string;
}

/**
 * valine评论组件
 */
export default class Comment extends PureComponent<CommentProps> {
  async componentDidMount() {
    if (isBrowser) {
      const Valine = (await import('@carrotwu/valine')).default;
      new Valine({
        el: '#ValineComment',
        appId: valineAppId,
        appKey: valineAppKey,
        //path: `/posttest`,
        avatar: 'robohash',
        placeholder: '感谢您的评论~~',
        enableQQ: true,
        requiredFields: ['nick'],
        adminName: 'carrotwu',
        adminEmail: '542425997@qq.com',
        adminImg: avatar,
        path: `/post/${this.props.postId}`
      });
    }
  }

  render() {
    return <div id="ValineComment" />;
  }
}

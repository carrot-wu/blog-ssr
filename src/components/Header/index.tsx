import React from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import styles from './styles.module.scss';
import avatar from '@src/assets/images/avatar.jpg';
import { Link } from '@src/components';

interface HeaderLink {
  to: string;
  key: string;
  name: string;
}

const headerLinkItem: HeaderLink[] = [
  { to: '/home', key: 'home', name: '首页' },
  { to: '/tag', key: 'tag', name: '分类' },
  { to: '/love', key: 'love', name: '关于她' }
];

export default function Header() {
  const location = useRouter();
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <img className={styles.avatar} src={avatar} alt="" />
        <div className={styles.menu}>
          {headerLinkItem.map((linkItem) => (
            <div
              className={classNames({
                [styles.menuItem]: true,
                [styles.selected]: location.pathname === linkItem.to
              })}
              key={linkItem.key}
            >
              <Link to={linkItem.to}>{linkItem.name}</Link>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

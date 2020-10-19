import React from 'react';
import { default as NextLink } from 'next/link';

interface LinkProps {
  className?: string;
  children?: React.ReactElement | string;
  to: string;
}

const Link: React.FC<LinkProps> = (props) => {
  const { children, className, to } = props;
  return <NextLink href={to}>{children && <a className={className}>{children}</a>}</NextLink>;
};

export default Link;

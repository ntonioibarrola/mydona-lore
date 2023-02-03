import type { FC, ReactNode } from 'react';
import classNames from 'classnames';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container: FC<ContainerProps> = ({ children, className }) => {
  return <div className={classNames('mx-auto max-w-[83rem]', className)}>{children}</div>;
};

export default Container;

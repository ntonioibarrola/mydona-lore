import type { FC, ReactNode } from 'react';

interface ThemeProps {
  children: ReactNode;
}

const Theme: FC<ThemeProps> = ({ children }) => {
  return (
    <div className='theme-dark bg-theme-background-neutral font-beaufort text-theme-text-neutral'>
      {children}
    </div>
  );
};

export default Theme;

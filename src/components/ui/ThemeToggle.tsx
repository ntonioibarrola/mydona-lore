import { type FC } from 'react';
import MoonIcon from '../../../public/svgs/Moon.svg';
import SunIcon from '../../../public/svgs/Sun.svg';
import useTheme from '../../hooks/useTheme';

const ButtonTheme: FC = () => {
  const [theme, setTheme] = useTheme();

  return (
    <button
      className='relative h-16 w-16 rounded-full border-1 border-solid border-theme-text-neutral text-theme-text-neutral'
      onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}
    >
      <div className='absolute inset-0 h-full w-full p-2 opacity-0 transition-opacity duration-300 dark:opacity-100'>
        <SunIcon />
      </div>
      <div className='absolute inset-0 h-full w-full p-2 opacity-100 transition-opacity duration-300 dark:opacity-0'>
        <MoonIcon />
      </div>
    </button>
  );
};

export default ButtonTheme;

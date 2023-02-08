import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

type Theme = 'dark' | 'light';

function useTheme(): [Theme, (value: Theme) => void] {
  const [theme, setTheme] = useLocalStorage('color-mode', 'dark');

  useEffect(() => {
    const className = 'dark';
    const bodyClasses = window.document.body.classList;

    theme === 'dark' ? bodyClasses.add(className) : bodyClasses.remove(className);
  }, [theme]);

  return [theme as Theme, setTheme];
}

export default useTheme;

import { useEffect } from 'react';
import { type NextPage } from 'next';
import Head from 'next/head';
import useTheme from '../hooks/useTheme';
import * as Character from '../components/CharacterPage';

const Home: NextPage = () => {
  const [theme, setTheme] = useTheme();

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  useEffect(() => {
    theme === 'dark' ? setTheme('dark') : setTheme('light');
  }, [theme, setTheme]);

  return (
    <>
      <Head>
        <title>Mydona</title>
        <meta name='description' content='' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Character.Header />
      <Character.Main />
      <Character.Footer />
    </>
  );
};

export default Home;

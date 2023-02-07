import { useEffect } from 'react';
import { type NextPage } from 'next';
import Head from 'next/head';
import BackgroundCover from '../components/BackgroundCover';
import Container from '../components/Container';
import Divider from '../components/Divider';
import Navbar from '../components/Navbar';
import Profile from '../components/Profile';
import * as Typography from '../components/Typography';
import useTheme from '../hooks/useTheme';
import RamalleneYulesJson from '../data/RamalleneYules.json';
import Title from '../components/Title';

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
      <header>
        <Navbar />
      </header>
      <main>
        <section>
          <BackgroundCover
            imageSource='/images/poppy.jpg'
            positionX={71.4897}
            positionY={14.6444}
          />
          <Title />
        </section>
        <section className='relative bg-red-500 dark:bg-theme-background-neutral'>
          <Container>
            <div className='grid py-20 px-10 sm:grid-cols-[1fr_275px] sm:py-5'>
              <div className='order-1 sm:order-2 sm:col-start-2 sm:col-end-3'>
                <Profile />
              </div>
              <div className='order-2 my-8 sm:order-1 sm:col-start-1 sm:col-end-2 sm:my-0'>
                <span className='flex flex-col items-center text-center'>
                  <h5 className='py-3 text-sm tracking-[0.2em]'>BACKSTORY</h5>
                  <Divider />
                  <Typography.Paragraph breaks>
                    {RamalleneYulesJson.description.backstory}
                  </Typography.Paragraph>
                  <h5 className='py-3 text-sm tracking-[0.2em]'>APPEARANCE</h5>
                  <Divider />
                  <Typography.Paragraph breaks>
                    {RamalleneYulesJson.description.appearance}
                  </Typography.Paragraph>
                  <h5 className='py-3 text-sm tracking-[0.2em]'>PERSONALITY</h5>
                  <Divider />
                  <Typography.Paragraph breaks>
                    {RamalleneYulesJson.description.personality}
                  </Typography.Paragraph>
                </span>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <footer>
        <Container>
          <div className='h-96' />
        </Container>
      </footer>
    </>
  );
};

export default Home;

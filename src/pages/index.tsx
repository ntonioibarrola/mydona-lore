import { useEffect } from 'react';
import { type NextPage } from 'next';
import Head from 'next/head';
import BackgroundCover from '../components/BackgroundCover';
import Container from '../components/Container';
import Divider from '../components/Divider';
import Navbar from '../components/Navbar';
import Profile from '../components/Profile';
import * as Typography from '../components/Typography';
import RamalleneYulesJson from '../data/RamalleneYules.json';

const Home: NextPage = () => {
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

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
            imageSource='/images/Alexstrasza1.png'
            positionX={67.4897}
            positionY={14.6444}
          />
        </section>
        <section className='relative bg-primary'>
          <div className='absolute -top-32 mx-auto w-full px-20 text-center sm:-top-60'>
            <h1 className='font-serif font-bold leading-[1.1] tracking-[0.15em] fluid-text-8xl'>
              Ramallene Yules
            </h1>
            <p className='font-bold tracking-[0.2em] text-accent fluid-text-lg'>
              SCORN OF THE EXILED
            </p>
          </div>
          <Container>
            <div className='grid px-10 py-20 sm:grid-cols-[1fr_275px] sm:py-0'>
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

import { type NextPage } from 'next';
import Head from 'next/head';
import Image from '../components/Image';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mydona</title>
        <meta name='description' content='' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='grid h-screen w-screen grid-cols-1 justify-center bg-primary text-white sm:grid-cols-[1fr_640px_1fr]'>
        <div className='col-start-1 col-end-2 grid auto-rows-min grid-cols-[1fr_calc(250px_+_50px)] sm:col-start-2 sm:col-end-2'>
          <div className='col-start-1 col-end-3 text-center'>
            <h1 className=''>Ramallene Yules</h1>
            <p>Scorn of the Exiled</p>
          </div>
          <div className='col-start-1 col-end-3 grid justify-center sm:col-start-2 sm:col-end-3'>
            <Image
              className='object-cover'
              src='/images/WoW - Alexstrasza I.png'
              height='400'
              width='250'
              alt='Ramallene Yules - Profile Image'
              shadow
            />
          </div>
          <div className='col-start-1 col-end-3 grid justify-center sm:col-start-1 sm:col-end-2 sm:justify-start'>
            Text
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

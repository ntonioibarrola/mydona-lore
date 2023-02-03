import { type NextPage } from 'next';
import Head from 'next/head';
import Container from '../components/Container';
import Divider from '../components/Divider';
import Navbar from '../components/Navbar';
import Profile from '../components/Profile';
import * as Typography from '../components/Typography';
import RamalleneYulesJson from '../data/RamalleneYules.json';

// interface CharacterJson {
//   basic: {
//     name: string,
//     gender: string,
//     birth: string,
//     age: number,
//     race: string,
//     occupation: string,
//     status: string,
//   },
//   description: {
//     backstory: string,
//     appearance: string,
//     personality: string,
//   },
// }

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mydona</title>
        <meta name='description' content='' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className='glassmorphism fixed z-10 w-full'>
        <Container>
          <Navbar />
        </Container>
      </header>
      <main>
        <Container>
          <div className='h-36' />
          <div className='m-20 text-center'>
            <h1 className='font-serif text-5xl font-bold leading-[1.1] tracking-widest'>
              {RamalleneYulesJson.basic.name}
            </h1>
            <p className='text-base font-bold tracking-widest text-accent'>SCORN OF THE EXILED</p>
          </div>
          <div className='grid px-10 sm:grid-cols-[1fr_275px]'>
            <div className='order-1 sm:order-2 sm:col-start-2 sm:col-end-3'>
              <Profile />
            </div>
            <div className='order-2 my-8 sm:order-1 sm:col-start-1 sm:col-end-2 sm:my-0'>
              <span className='flex flex-col items-center text-center'>
                <h5 className='py-3 text-sm tracking-widest'>BACKSTORY</h5>
                <Divider />
                <Typography.Paragraph breaks>
                  {RamalleneYulesJson.description.backstory}
                </Typography.Paragraph>
                <h5 className='py-3 text-sm tracking-widest'>APPEARANCE</h5>
                <Divider />
                <Typography.Paragraph breaks>
                  {RamalleneYulesJson.description.appearance}
                </Typography.Paragraph>
                <h5 className='py-3 text-sm tracking-widest'>PERSONALITY</h5>
                <Divider />
                <Typography.Paragraph breaks>
                  {RamalleneYulesJson.description.personality}
                </Typography.Paragraph>
              </span>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
};

export default Home;

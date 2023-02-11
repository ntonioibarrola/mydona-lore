import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import BackgroundCover from './BackgroundCover';
import Container from './Container';
import Navbar from './Navbar';
import HeroTitle from './HeroTitle';
import MockJson from '../data/mock.json';
import Heading from '@typography/Heading';
import Paragraph from '@typography/Paragraph';
import Divider from '@ui/Divider';

type Name = {
  fullName: string;
  firstName: string;
  lastName: string;
};

type Data = {
  id: string;
  basics: {
    name: Name;
    gender: string;
    race: string;
    birthDate: string;
    age: number;
    alignment: string;
    status: string;
  };
  descriptions: {
    backstory: {
      title: string;
      description: string;
    }[];
    appearance: string;
    characteristics: {
      personality: string;
      ideals: string;
      flaws: string;
    };
  };
};

export const Header = () => {
  return (
    <header>
      <Navbar />
    </header>
  );
};

export const Main = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 1], [0, 1]);

  const data: Data = MockJson;

  return (
    <main>
      <section>
        <BackgroundCover imageSource='/images/Poppy.jpg' positionX={71.4897} positionY={14.6444} />
        <HeroTitle />
      </section>
      <section>
        <motion.div
          className='pointer-events-none relative bg-neutral-50 pt-[100vh] pb-96 duration-400 ease-ease dark:bg-neutral-900'
          style={{ opacity: opacity }}
        >
          <Container>
            <div className='mb-20'>
              <Heading variant={2} weight='bold' spread='wide' center uppercase>
                Ramallene
              </Heading>
              <Paragraph variant='primary' alignment='center' weight='bold' spread='wide' uppercase>
                Scorn of the Exiled
              </Paragraph>
            </div>
            <div className='grid px-10 sm:grid-cols-[1fr_275px]'>
              <div className='relative order-1 sm:order-2 sm:col-start-2 sm:col-end-3'>
                <div className='space-y-7'>
                  <div className='relative grid h-[45rem] w-[27.5rem] place-items-center'>
                    <Image
                      className='object-cover'
                      style={{ objectPosition: '71%' }}
                      src='/images/Poppy.jpg'
                      alt='Poppy'
                      fill
                      sizes='27.5rem'
                    />
                    <div className='absolute h-[42rem] w-[24.5rem] border-1 border-solid border-primary-700 dark:border-primary-600' />
                  </div>
                  <div className='relative grid h-[41rem] w-[27.5rem] place-items-center outline outline-1 outline-neutral-300 dark:outline-neutral-800'>
                    <Image
                      className='object-cover opacity-10 [filter:brightness(.9)_grayscale(100%)] dark:opacity-20 dark:[filter:brightness(.3)_grayscale(100%)]'
                      style={{ objectPosition: '71%' }}
                      src='/images/Poppy.jpg'
                      alt='Poppy'
                      fill
                      sizes='27.5rem'
                    />
                    <div className='absolute flex h-[36.5rem] w-[22rem] flex-col justify-between'>
                      {Object.entries(data.basics).map(([key, value]) =>
                        key === 'name' ? (
                          <div key={key}>
                            <Paragraph variant='secondary' size='small' weight='bold' uppercase>
                              {key}
                            </Paragraph>
                            <Paragraph variant='default' size='small' weight='medium'>
                              {(value as Name).fullName}
                            </Paragraph>
                          </div>
                        ) : (
                          <div key={key}>
                            <Paragraph variant='secondary' size='small' weight='bold' uppercase>
                              {key}
                            </Paragraph>
                            <Paragraph variant='default' size='small' weight='medium'>
                              {value as string}
                            </Paragraph>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className='order-2 my-8 sm:order-1 sm:col-start-1 sm:col-end-2 sm:my-0 sm:mr-20'>
                <div>
                  <div className='space-y-2'>
                    <Heading variant={6} weight='bold' spread='wide' uppercase>
                      Backstory
                    </Heading>
                    <Divider variant='solid' fullWidth />
                  </div>
                  {data.descriptions.backstory.map((item) => (
                    <div key={item.title} className='my-8'>
                      <div className='mb-2'>
                        <Paragraph variant='secondary' size='small' weight='bold'>
                          {item.title}
                        </Paragraph>
                      </div>
                      <Paragraph variant='default' weight='medium' alignment='justify'>
                        {item.description}
                      </Paragraph>
                    </div>
                  ))}
                </div>
                <div>
                  <div className='space-y-2'>
                    <Heading variant={6} weight='bold' spread='wide' uppercase>
                      Appearance
                    </Heading>
                    <Divider variant='solid' fullWidth />
                  </div>
                  <div className='my-8'>
                    <Paragraph variant='default' weight='medium' alignment='justify'>
                      {data.descriptions.appearance}
                    </Paragraph>
                  </div>
                </div>
                <div>
                  <div className='space-y-2'>
                    <Heading variant={6} weight='bold' spread='wide' uppercase>
                      Characteristics
                    </Heading>
                    <Divider variant='solid' fullWidth />
                  </div>
                  {Object.entries(data.descriptions.characteristics).map(([key, value]) => (
                    <div key={key} className='my-8'>
                      <div className='mb-2'>
                        <Paragraph variant='secondary' size='small' weight='bold'>
                          {key.charAt(0).toUpperCase() + key.slice(1)}
                        </Paragraph>
                      </div>
                      <Paragraph variant='default' weight='medium' alignment='justify'>
                        {value ? value : '-'}
                      </Paragraph>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </motion.div>
      </section>
    </main>
  );
};

export const Footer = () => {
  return <footer />;
};

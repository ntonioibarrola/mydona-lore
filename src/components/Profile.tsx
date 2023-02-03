import Carousel from './Carousel';

const Profile = () => {
  const info = {
    gender: 'Female',
    birth: '6th of Mid Year, 4E 66',
    age: '25',
    race: 'Accursed',
    occupation: 'Mercenary',
    status: 'Alive',
  };

  const imageSources = ['/images/WoW - Alexstrasza I.png', '/images/WoW - Alexstrasza II.png'];

  return (
    <div className='relative grid justify-center sm:justify-end'>
      <Carousel height={450} width={275} imageSources={imageSources} />
      <div className='p-7'>
        {Object.entries(info).map(([key, value]) => (
          <div key={key} className='flex justify-between leading-relaxed tracking-widest'>
            <span className='text-xs text-subaccent'>{`${key.toUpperCase()}: `}</span>
            <span className='text-xs'>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;

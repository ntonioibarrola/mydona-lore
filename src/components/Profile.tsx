import Carousel from './Carousel';
import CandleIcon from '../../public/svgs/Candle-Light.svg';
import CharacterIcon from '../../public/svgs/Character.svg';
import HeartBeatIcon from '../../public/svgs/Heart-Beat.svg';
import DwarfFaceIcon from '../../public/svgs/Dwarf-Face.svg';
import PocketWatchIcon from '../../public/svgs/Pocket-Watch.svg';
import VisoredHelmIcon from '../../public/svgs/Visored-Helm.svg';
import RamalleneYulesJson from '../data/RamalleneYules.json';

const Profile = () => {
  const info = {
    gender: <CharacterIcon />,
    birth: <CandleIcon />,
    age: <PocketWatchIcon />,
    race: <DwarfFaceIcon />,
    occupation: <VisoredHelmIcon />,
    status: <HeartBeatIcon />,
  };
  type InfoKey = 'gender' | 'birth' | 'age' | 'race' | 'occupation' | 'status';

  const imageSources = ['/images/Alexstrasza1.png', '/images/Alexstrasza2.png'];

  return (
    <div className='relative grid justify-center sm:justify-end'>
      <Carousel height={450} width={275} imageSources={imageSources} />
      <div className='space-y-2 p-7'>
        {Object.entries(RamalleneYulesJson.basic).map(([key, value]) => (
          <div key={key} className='flex justify-between leading-[1.8] tracking-widest'>
            <span className='flex items-center gap-x-2'>
              <span className='h-7 w-7'>{info[key as InfoKey]}</span>
              <span className='text-xs text-subaccent'>{`${key.toUpperCase()}: `}</span>
            </span>
            <span className='text-xs'>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;

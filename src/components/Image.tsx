import { type FC } from 'react';
import { default as NextImage, type ImageProps as NextImageProps } from 'next/image';

type ImageProps = NextImageProps & {
  shadow?: boolean;
};

const Image: FC<ImageProps> = (props) => {
  const { shadow, height, width } = props;

  return (
    <div
      className='relative overflow-hidden'
      style={{ height: height + 'px', width: width + 'px' }}
    >
      <NextImage {...props} style={{ height: height + 'px', width: width + 'px' }} />
      <span className={shadow ? 'image-shadow h-[200%] w-[calc(100%_+_50px)]' : ''} />
    </div>
  );
};

export default Image;

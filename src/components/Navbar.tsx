import Paragraph from '@typography/Paragraph';
import ThemeToggle from '@ui/ThemeToggle';

const Navbar = () => {
  return (
    <nav className='absolute z-10 flex h-36 w-full items-center justify-between gap-5 px-20 text-base text-neutral-50'>
      <Paragraph variant='default' size='large' weight='heavy' uppercase>
        <span className='cursor-pointer tracking-wide text-neutral-50 [text-shadow:0_0_20px_rgba(var(--color-neutral-900),0.7)]'>
          Mydona
        </span>
      </Paragraph>
      <div className='flex gap-x-10 [text-shadow:0_0_20px_rgba(var(--color-neutral-900),0.7)]'>
        <Paragraph variant='default' weight='bold'>
          <span className='cursor-pointer tracking-widest text-neutral-50'>Characters</span>
        </Paragraph>
        <Paragraph variant='default' weight='bold'>
          <span className='cursor-pointer tracking-widest text-neutral-50'>Bestiary</span>
        </Paragraph>
        <Paragraph variant='default' weight='bold'>
          <span className='cursor-pointer tracking-widest text-neutral-50'>Regions</span>
        </Paragraph>
        <Paragraph variant='default' weight='bold'>
          <span className='cursor-pointer tracking-widest text-neutral-50'>Map</span>
        </Paragraph>
      </div>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;

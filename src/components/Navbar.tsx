import ThemeToggle from '@ui/ThemeToggle';

const Navbar = () => {
  return (
    <nav className='absolute z-10 flex h-36 w-full items-center justify-between gap-5 px-20 text-base text-neutral-50'>
      <div className='flex gap-x-5'>
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
      </div>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;

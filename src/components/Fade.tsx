import { cubicBezier, motion } from 'framer-motion';

const Fade = () => {
  return (
    <motion.div
      className='fixed z-50 h-full w-full bg-neutral-900'
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, transitionEnd: { display: 'none' } }}
      transition={{ duration: 0.6, ease: cubicBezier(0.4, 0, 0.2, 1) }}
    />
  );
};

export default Fade;

import { type AppType } from 'next/dist/shared/lib/utils';
import Theme from '../components/Theme';

import '../styles/globals.css';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Theme>
      <Component {...pageProps} />)
    </Theme>
  );
};

export default MyApp;

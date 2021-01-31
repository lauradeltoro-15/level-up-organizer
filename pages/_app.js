import '../styles/globals.css';
import Provider from '../themes';

function MyApp({ Component, pageProps }) {

  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
    )
}

export default MyApp;

import '../styles/globals.css';
import AudioProvider from '../context/audio.context';

function MyApp({ Component, pageProps }) {
  return (
    <AudioProvider>
      <Component {...pageProps} />
    </AudioProvider>
  );
}

export default MyApp;

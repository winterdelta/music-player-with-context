import { useContext } from 'react';
import { AudioContext } from '../context/audio.context';

export default function Layout({ children }) {
  const { togglePlayPause } = useContext(AudioContext);
  const { isPlaying } = useContext(AudioContext);
  const { state, dispatch } = useContext(AudioContext);

  const playOrPause = () =>
    state.playing ? dispatch({ type: 'PAUSE' }) : dispatch({ type: 'PLAY' });

  return (
    <div>
      {children}
      <div />
      <div onClick={playOrPause}>{state.playing ? 'pause' : 'play'}</div>
    </div>
  );
}

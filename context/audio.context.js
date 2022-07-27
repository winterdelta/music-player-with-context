import React, {
  createContext,
  useReducer,
  useEffect,
  useState,
  useRef,
} from 'react';
import { initialState, reducer } from '../reducer';

export const AudioContext = createContext();
export default function AudioProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [isPlaying, setIsPlaying] = useState(false);

  const [source, setSource] = useState(
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3'
  );

  const audioPlayer = useRef();

  useEffect(() => {
    if (state.playing) {
      // audioPlayer.current.load();
      audioPlayer.current.play();
      // audioPlayer.current.playbackRate = 2;
    } else audioPlayer.current.pause();
  }, [state.playing, state.currentSongId]);

  return (
    <AudioContext.Provider
      value={{
        source,
        state,
        dispatch,
      }}
    >
      <audio controls ref={audioPlayer} src={state.currentSongId} />
      {props.children}
    </AudioContext.Provider>
  );
}

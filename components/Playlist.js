import { useContext } from 'react';
import { AudioContext } from '../context/audio.context';

export default function Playlist() {
  const { state, dispatch } = useContext(AudioContext);

  return (
    <>
      <table>
        <tr>
          {[
            {
              trackName: 'track1',
              src: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3',
            },
            {
              trackName: 'track2',
              src: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3',
            },
            {
              trackName: 'track3',
              src: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3',
            },
          ].map((d) => (
            <td>
              <PlayPause
                playing={state.playing}
                songId={d.src}
                isCurrentSong={state.currentSongId === d.src}
              />
              {d.trackName}
            </td>
          ))}
        </tr>
      </table>
      <div>is audio playing: {state.playing ? 'yes' : 'no'}</div>
    </>
  );
}

const PlayPause = ({ playing, songId, isCurrentSong }) => {
  const { dispatch } = useContext(AudioContext);

  if (isCurrentSong && playing) {
    return <div onClick={() => dispatch({ type: 'PAUSE' })}>PAUSE</div>;
  } else {
    return <div onClick={() => dispatch({ type: 'PLAY', songId })}>PLAY</div>;
  }
};

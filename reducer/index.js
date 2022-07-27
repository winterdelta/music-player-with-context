export const initialState = {
  currentSongId:
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  playing: false
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'PLAY':
      return {
        ...state,
        playing: true,
        currentSongId: action.songId || state.currentSongId
      };
    case 'PAUSE':
      return { ...state, playing: false };
  }

  return state;
};

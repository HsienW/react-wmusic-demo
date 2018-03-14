import {createAction} from 'redux-actions';
import * as AudioActions from './AudioActions';

const audioNewPlay = createAction(AudioActions.AUDIO_NEW_PLAY);
const audioPlay = createAction(AudioActions.AUDIO_PLAY);
const audioStop = createAction(AudioActions.AUDIO_STOP);
const audioPrev = createAction(AudioActions.AUDIO_PREV);
const audioNext = createAction(AudioActions.AUDIO_NEXT);
const audioEnded = createAction(AudioActions.AUDIO_ENDED);
const updateVolume = createAction(AudioActions.UPDATE_VOLUME);
const updatePlayState = createAction(AudioActions.UPDATE_PLAY_STATE);
const updatePlayProgress = createAction(AudioActions.UPDATE_PLAY_PROGRESS);
const forceUpdateAudio = createAction(AudioActions.FORCE_UPDATE_AUDIO);

const newPlayClicked = (playListName) => {
    return (dispatch) => {
        dispatch(audioNewPlay(playListName));
    };
};


export {
    newPlayClicked,
    audioNewPlay,
    audioPlay,
    audioStop,
    audioPrev,
    audioNext,
    audioEnded,
    updateVolume,
    updatePlayState,
    updatePlayProgress,
    forceUpdateAudio
};

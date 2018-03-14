import * as AudioActions from '../Actions/AudioActions';

const AudioReducer = (state = {actionType: ''}, action) => {
    switch (action.type) {
        case AudioActions.AUDIO_NEW_PLAY:
        case AudioActions.AUDIO_PLAY:
        case AudioActions.AUDIO_STOP:
        case AudioActions.AUDIO_PREV:
        case AudioActions.AUDIO_NEXT:
        case AudioActions.AUDIO_ENDED:
        case AudioActions.UPDATE_VOLUME:
        case AudioActions.UPDATE_PLAY_PROGRESS:
        case AudioActions.FORCE_UPDATE_AUDIO:
            return {actionType: action.type};

        default:
            return state;
    }
};

export default AudioReducer;

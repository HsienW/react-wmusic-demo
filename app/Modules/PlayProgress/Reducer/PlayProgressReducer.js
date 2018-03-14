import MainActions from '../../Main/Actions/MainAction';

const PlayProgressReducer = (state = {actionType: ''}, action) => {
    switch (action.type) {
        case MainActions.getAudio().AUDIO_NEW_PLAY:
        case MainActions.getAudio().AUDIO_PLAY:
        case MainActions.getAudio().AUDIO_STOP:
        case MainActions.getAudio().AUDIO_ENDED:
        case MainActions.getAudio().FORCE_UPDATE_AUDIO:
        case MainActions.getAudio().UPDATE_PLAY_PROGRESS:
            return {actionType: action.type};

        default:
            return state;
    }
};

export default PlayProgressReducer;

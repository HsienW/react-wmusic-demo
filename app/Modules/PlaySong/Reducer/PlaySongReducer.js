import MainActions from '../../Main/Actions/MainAction';

const PlaySongReducer = (state = {actionType: ''}, action) => {
    switch (action.type) {
        case MainActions.getAudio().AUDIO_NEW_PLAY:
        case MainActions.getAudio().FORCE_UPDATE_AUDIO:
            return {actionType: action.type};

        default:
            return state;
    }
};

export default PlaySongReducer;

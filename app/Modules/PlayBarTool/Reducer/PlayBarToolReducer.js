import MainActions from '../../Main/Actions/MainAction';

const PlayBarToolReducer = (state = {actionType: ''}, action) => {
    switch (action.type) {
        case MainActions.getAudio().AUDIO_NEW_PLAY:
        case MainActions.getAudio().UPDATE_PLAY_STATE:
            return {actionType: action.type};

        default:
            return state;
    }
};

export default PlayBarToolReducer;

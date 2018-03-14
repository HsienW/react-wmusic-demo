import {createAction} from 'redux-actions';
import SpotifyWebApi from 'spotify-web-api-js';
import ApiCenter from '../../../ApiCenter/ApiCenter';
import * as PlayListActions from './PlayListActions';

const spotify = new SpotifyWebApi();

const getPlayListStart = createAction(PlayListActions.GET_PLAY_LIST_START);
const getPlayListSuccess = createAction(PlayListActions.GET_PLAY_LIST_SUCCESS);
const getPlayListFailed = createAction(PlayListActions.GET_PLAY_LIST_FAILED);

const forceUpdatePlayList = createAction(PlayListActions.FORCE_UPDATE_PLAY_LIST);


const getPlayList = (userId, playListId) => {
    return (dispatch) => {
        dispatch(getPlayListStart());
        ApiCenter.getAccessToken();
        spotify.getPlaylistTracks(userId, playListId)
            .then((respond) => {
                console.log(respond);
                dispatch(getPlayListSuccess(respond));
            })
            .catch((error) => {
                console.log(error);
                dispatch(getPlayListFailed(error));
            });
    };
};

export {
    getPlayList,
    forceUpdatePlayList,
};

import {createAction} from 'redux-actions';
import SpotifyWebApi from 'spotify-web-api-js';
import ApiCenter from '../../../ApiCenter/ApiCenter';
import * as AlbumPlayListActions from '../Actions/AlbumPlayListActions';

const spotify = new SpotifyWebApi();

const getAlbumPlayListStart = createAction(AlbumPlayListActions.GET_ALBUM_PLAY_LIST_START);
const getAlbumPlayListSuccess = createAction(AlbumPlayListActions.GET_ALBUM_PLAY_LIST_SUCCESS);
const getAlbumPlayListFailed = createAction(AlbumPlayListActions.GET_ALBUM_PLAY_LIST_FAILED);
const forceUpdateAlbumPlayList = createAction(AlbumPlayListActions.FORCE_UPDATE_ALBUM_PLAY_LIST);

const getAlbumPlayList = (request) => {
    return (dispatch) => {
        dispatch(getAlbumPlayListStart());
        ApiCenter.getAccessToken();
        spotify.getAlbumTracks(request)
            .then((respond) => {
                console.log(respond);
                dispatch(getAlbumPlayListSuccess(respond));
            })
            .catch((error) => {
                console.log(error);
                dispatch(getAlbumPlayListFailed(error));
            });
    };
};

export {
    getAlbumPlayList,
    forceUpdateAlbumPlayList
};

import {createAction} from 'redux-actions';
import SpotifyWebApi from 'spotify-web-api-js';
import ApiCenter from '../../../ApiCenter/ApiCenter';
import * as ArtistActions from './ArtistActions';

const spotify = new SpotifyWebApi();

const getArtistDataStart = createAction(ArtistActions.GET_ARTIST_DATA_START);
const getArtistDataSuccess = createAction(ArtistActions.GET_ARTIST_DATA_SUCCESS);
const getArtistDataFailed = createAction(ArtistActions.GET_ARTIST_DATA_FAILED);
const forceUpdateArtistData = createAction(ArtistActions.FORCE_UPDATE_ARTIST_DATA);

const getArtistData = (request) => {
    return (dispatch) => {
        dispatch(getArtistDataStart());
        ApiCenter.getAccessToken();
        spotify.getArtist(request)
            .then((respond) => {
                console.log(respond);
                dispatch(getArtistDataSuccess(respond));
            })
            .catch((error) => {
                console.log(error);
                dispatch(getArtistDataFailed(error));
            });
    };
};

const getArtistTopTrackStart = createAction(ArtistActions.GET_ARTIST_TOP_TRACK_START);
const getArtistTopTrackSuccess = createAction(ArtistActions.GET_ARTIST_TOP_TRACK_SUCCESS);
const getArtistTopTrackFailed = createAction(ArtistActions.GET_ARTIST_TOP_TRACK_FAILED);
const forceUpdateTopTrack = createAction(ArtistActions.FORCE_UPDATE_TOP_TRACK);

const getArtistTopTrack = (artistID, countryId) => {
    return (dispatch) => {
        dispatch(getArtistTopTrackStart());
        ApiCenter.getAccessToken();
        spotify.getArtistTopTracks(artistID, countryId)
            .then((respond) => {
                console.log(respond);
                dispatch(getArtistTopTrackSuccess(respond));
            })
            .catch((error) => {
                console.log(error);
                dispatch(getArtistTopTrackFailed(error));
            });
    };
};

const getArtistAlbumStart = createAction(ArtistActions.GET_ARTIST_ALBUM_START);
const getArtistAlbumSuccess = createAction(ArtistActions.GET_ARTIST_ALBUM_SUCCESS);
const getArtistAlbumFailed = createAction(ArtistActions.GET_ARTIST_ALBUM_FAILED);
const forceUpdateAlbum = createAction(ArtistActions.FORCE_UPDATE_ALBUM);

const getArtistAlbum = (request) => {
    return (dispatch) => {
        dispatch(getArtistAlbumStart());
        ApiCenter.getAccessToken();
        spotify.getArtistAlbums(request)
            .then((respond) => {
                console.log(respond);
                dispatch(getArtistAlbumSuccess(respond));
            })
            .catch((error) => {
                console.log(error);
                dispatch(getArtistAlbumFailed(error));
            });
    };
};

export {
    getArtistData,
    forceUpdateArtistData,
    getArtistTopTrack,
    forceUpdateTopTrack,
    getArtistAlbum,
    forceUpdateAlbum
};

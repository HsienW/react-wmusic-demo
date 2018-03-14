import {createAction} from 'redux-actions';
import SpotifyWebApi from 'spotify-web-api-js';
import ApiCenter from '../../../ApiCenter/ApiCenter';
import * as NewReleaseActions from './NewReleaseActions';

const spotify = new SpotifyWebApi();

const getNewReleaseStart = createAction(NewReleaseActions.GET_NEW_RELEASE_START);
const getNewReleaseSuccess = createAction(NewReleaseActions.GET_NEW_RELEASE_SUCCESS);
const getNewReleaseFailed = createAction(NewReleaseActions.GET_NEW_RELEASE_FAILED);
const forceUpdateNewRelease = createAction(NewReleaseActions.FORCE_UPDATE_NEW_RELEASE);

const getNewRelease = () => {
    return (dispatch) => {
        dispatch(getNewReleaseStart());
        ApiCenter.getAccessToken();
        spotify.getNewReleases()
            .then((respond) => {
                dispatch(getNewReleaseSuccess(respond));
            })
            .catch((error) => {
                console.log(error);
                dispatch(getNewReleaseFailed(error));
            });
    };
};

export {
    getNewRelease,
    forceUpdateNewRelease,
};

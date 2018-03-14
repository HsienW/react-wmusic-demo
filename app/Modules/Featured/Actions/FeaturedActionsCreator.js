import {createAction} from 'redux-actions';
import SpotifyWebApi from 'spotify-web-api-js';
import ApiCenter from '../../../ApiCenter/ApiCenter';
import * as FeaturedActions from './FeaturedActions';

const spotify = new SpotifyWebApi();

const getFeaturedStart = createAction(FeaturedActions.GET_FEATURED_START);
const getFeaturedSuccess = createAction(FeaturedActions.GET_FEATURED_SUCCESS);
const getFeaturedFailed = createAction(FeaturedActions.GET_FEATURED_FAILED);
const forceUpdateFeatured = createAction(FeaturedActions.FORCE_UPDATE_FEATURED);

const getFeatured = () => {
    return (dispatch) => {
        dispatch(getFeaturedStart());
        ApiCenter.getAccessToken();
        spotify.getFeaturedPlaylists()
            .then((respond) => {
                dispatch(getFeaturedSuccess(respond));
            })
            .catch((error) => {
                console.log(error);
                dispatch(getFeaturedFailed(error));
            });
    };
};

export {
    getFeatured,
    forceUpdateFeatured,
};

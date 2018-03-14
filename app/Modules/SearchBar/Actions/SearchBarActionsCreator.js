import {createAction} from 'redux-actions';
import * as SearchBarActions from './SearchBarActions';
import ApiCenter from '../../../ApiCenter/ApiCenter';
import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi();

const searchStart = createAction(SearchBarActions.SEARCH_START);
const searchSuccess = createAction(SearchBarActions.SEARCH_SUCCESS);
const searchFailed = createAction(SearchBarActions.SEARCH_FAILED);
const forceUpdateSearch = createAction(SearchBarActions.FORCE_UPDATE_SEARCH);

const sendSearch = (request, requestTypes) => {
    return (dispatch) => {
        dispatch(searchStart());
        ApiCenter.getAccessToken();
        spotify.search(request, requestTypes)
            .then((respond) => {
                console.log(respond);
                dispatch(searchSuccess(respond));
            })
            .catch((error) => {
                console.log(error);
                dispatch(searchFailed(error));
            });
    };
};

export {
    sendSearch,
    forceUpdateSearch,
};

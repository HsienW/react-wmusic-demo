import {createAction} from 'redux-actions';
import SpotifyWebApi from 'spotify-web-api-js';
import ApiCenter from '../../../ApiCenter/ApiCenter';
import * as GenresActions from './GenresActions';

const spotify = new SpotifyWebApi();

const getGenresStart = createAction(GenresActions.GET_GENRES_START);
const getGenresSuccess = createAction(GenresActions.GET_GENRES_SUCCESS);
const getGenresFailed = createAction(GenresActions.GET_GENRES_FAILED);

const getGenres = () => {
    return (dispatch) => {
        dispatch(getGenresStart());
        ApiCenter.getAccessToken();
        spotify.getCategories()
            .then((respond) => {
                dispatch(getGenresSuccess(respond));
            })
            .catch((error) => {
                console.log(error);
                dispatch(getGenresFailed(error));
            });
    };
};

const getGenresListStart = createAction(GenresActions.GET_GENRES_CONTENT_START);
const getGenresListSuccess = createAction(GenresActions.GET_GENRES_CONTENT_SUCCESS);
const getGenresListFailed = createAction(GenresActions.GET_GENRES_CONTENT_FAILED);

const getGenresList = (genresId) => {
    return (dispatch) => {
        dispatch(getGenresListStart());
        ApiCenter.getAccessToken();
        spotify.getCategoryPlaylists(genresId)
            .then((respond) => {
                dispatch(getGenresListSuccess(respond));
            })
            .catch((error) => {
                console.log(error);
                dispatch(getGenresListFailed(error));
            });
    };
};

const forceUpdateGenres = createAction(GenresActions.FORCE_UPDATE_GENRES);

export {
    getGenres,
    getGenresList,
    forceUpdateGenres,
};

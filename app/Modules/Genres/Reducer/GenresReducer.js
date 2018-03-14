import GenresRespond from '../../../ApiCenter/Browse/Respond/GenresRespond';
import GenresContentRespond from '../../../ApiCenter/Browse/Respond/GenresContentRespond';
import * as GenresActions from '../Actions/GenresActions';

const GenresReducer = (state = {actionType: ''}, action) => {
    switch (action.type) {
        case GenresActions.GET_GENRES_SUCCESS:
            GenresRespond.genresItems.length = 0;
            GenresRespond.genresItems = action.payload.categories.items;
            return {actionType: action.type};

        case GenresActions.GET_GENRES_CONTENT_SUCCESS:
            GenresContentRespond.genresContentItems.length = 0;
            GenresContentRespond.genresContentItems = action.payload.playlists.items;
            return {actionType: action.type};

        case GenresActions.FORCE_UPDATE_GENRES:
            return {actionType: action.type};

        default:
            return state;
    }
};

export default GenresReducer;

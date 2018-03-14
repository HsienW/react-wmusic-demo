import MainActions from '../../Main/Actions/MainAction';

const SearchArtistsReducer = (state = {actionType: ''}, action) => {
    switch (action.type) {
        case MainActions.getSearchBar().SEARCH_SUCCESS:
        case MainActions.getSearchBar().FORCE_UPDATE_SEARCH:
            return {actionType: action.type};

        default:
            return state;
    }
};

export default SearchArtistsReducer;
import * as SearchBarActions from '../Actions/SearchBarActions';

const SearchBarReducer = (state = {actionType: ''}, action) => {
    switch (action.type) {
        case SearchBarActions.SEARCH_SUCCESS:
        case SearchBarActions.FORCE_UPDATE_SEARCH:
            return {actionType: action.type};

        default:
            return state;
    }
};

export default SearchBarReducer;

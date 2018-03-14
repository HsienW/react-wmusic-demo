import is from 'is_js';
import MainActions from '../../Main/Actions/MainAction';
import SearchRespond from '../../../ApiCenter/Search/Respond/SearchRespond';

const SearchContentReducer = (state = {actionType: ''}, action) => {
    switch (action.type) {
        case MainActions.getSearchBar().SEARCH_SUCCESS:
            SearchRespond.albumsItems = action.payload.albums.items;
            SearchRespond.artistsItems = action.payload.artists.items.filter((itemObj) => {
                return is.not.empty(itemObj.images);
            });
            SearchRespond.playlistsItems = action.payload.playlists.items;
            SearchRespond.tracksItems = action.payload.tracks.items.filter((itemObj) => {
                return is.not.falsy(itemObj.preview_url);
            });

            return {actionType: action.type};

        case MainActions.getSearchBar().FORCE_UPDATE_SEARCH:
            return {actionType: action.type};

        default:
            return state;
    }
};

export default SearchContentReducer;
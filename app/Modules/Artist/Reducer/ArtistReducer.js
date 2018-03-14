import is from 'is_js';
import ArtistRespond from '../../../ApiCenter/Artist/Respond/ArtistRespond';
import AlbumRespond from '../../../ApiCenter/Album/Respond/AlbumRespond';
import * as ArtistActions from '../Actions/ArtistActions';

const ArtistContentReducer = (state = {actionType: ''}, action) => {
    switch (action.type) {
        case ArtistActions.GET_ARTIST_TOP_TRACK_SUCCESS:
            ArtistRespond.topTracksItems = action.payload.tracks.filter((itemObj) => {
                return is.not.falsy(itemObj.preview_url);
            });
            return {actionType: action.type};

        case ArtistActions.GET_ARTIST_ALBUM_SUCCESS:
            AlbumRespond.albumsItems = action.payload.items.filter((itemObj) => {
                return is.not.empty(itemObj.images);
            });
            return {actionType: action.type};

        default:
            return state;
    }
};

export default ArtistContentReducer;
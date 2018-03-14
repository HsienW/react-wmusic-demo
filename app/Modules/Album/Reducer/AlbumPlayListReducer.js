import is from 'is_js';
import WebStorage from '../../../WebStorage/WebStorage';
import AlbumPlayListRespond from '../../../ApiCenter/Album/Respond/AlbumPlayListRespond';
import * as WebStorageKeys from '../../../WebStorage/WebStorageKeys';
import * as AlbumPlayListActions from '../Actions/AlbumPlayListActions';

const albumData = () => {
    const imageURL = WebStorage.getSessionStorage(WebStorageKeys.PLAYLIST_IMAGE);
    const albumName = WebStorage.getSessionStorage(WebStorageKeys.PLAYLIST_NAME);
    const data = {
        images: [{url: ''}, {url: ''}, {url: imageURL}],
        name: albumName
    };
    return data;
};

const AlbumPlayListReducer = (state = {actionType: ''}, action) => {
    switch (action.type) {
        case AlbumPlayListActions.GET_ALBUM_PLAY_LIST_SUCCESS:
            AlbumPlayListRespond.listItems = action.payload.items.filter((itemObj) => {
                itemObj.album = albumData();
                return is.not.falsy(itemObj.preview_url);
            });
            return {actionType: action.type};

        case AlbumPlayListActions.FORCE_UPDATE_ALBUM_PLAY_LIST:
            return {actionType: action.type};

        default:
            return state;
    }
};

export default AlbumPlayListReducer;
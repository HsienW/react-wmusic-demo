import is from 'is_js';
import WebStorage from '../../../WebStorage/WebStorage';
import * as WebStorageKeys from '../../../WebStorage/WebStorageKeys';
import * as PlayListActions from '../Actions/PlayListActions';
import FeaturedPlayListRespond from '../../../ApiCenter/PlayList/Respond/FeaturedPlayListRespond';
import GenresPlayListRespond from '../../../ApiCenter/PlayList/Respond/GenresPlayListRespond';

const listSelect = (respond) => {
    const listName = WebStorage.getSessionStorage(WebStorageKeys.PLAYLIST_SOURCE);

    switch (listName) {
        case 'Featured':
            FeaturedPlayListRespond.listItems = listContent(respond);
            return;

        case 'GenresContent':
            GenresPlayListRespond.listItems = listContent(respond);
            return;

        default:
            return;
    }
};

const listContent = (respond) => {
    const content = respond.items.filter((itemObj) => {
        itemObj.id = itemObj.track.id;
        itemObj.album = itemObj.track.album;
        itemObj.preview_url = itemObj.track.preview_url;
        itemObj.name = itemObj.track.name;
        return is.not.falsy(itemObj.track.preview_url);
    });
    return content;
};

const PlayListReducer = (state = {actionType: ''}, action) => {
    switch (action.type) {
        case PlayListActions.GET_PLAY_LIST_SUCCESS:
            listSelect(action.payload);
            return {actionType: action.type};

        case PlayListActions.FORCE_UPDATE_PLAY_LIST:
            return {actionType: action.type};

        default:
            return state;
    }
};

export default PlayListReducer;
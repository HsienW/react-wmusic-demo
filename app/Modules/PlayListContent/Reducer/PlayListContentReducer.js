import MainActions from '../../Main/Actions/MainAction';
import AlbumPlayListRespond from '../../../ApiCenter/Album/Respond/AlbumPlayListRespond';
import ArtistRespond from '../../../ApiCenter/Artist/Respond/ArtistRespond';
import FeaturedPlayListRespond from '../../../ApiCenter/PlayList/Respond/FeaturedPlayListRespond';
import GenresPlayListRespond from '../../../ApiCenter/PlayList/Respond/GenresPlayListRespond';
import SearchRespond from '../../../ApiCenter/Search/Respond/SearchRespond';
import WebStorage from '../../../WebStorage/WebStorage';
import * as WebStorageKeys from '../../../WebStorage/WebStorageKeys';

const transferList = (listName) => {
    switch (listName) {
        case 'Album':
            updateList(JSON.stringify(AlbumPlayListRespond.listItems));
            return;

        case 'Artist':
            updateList(JSON.stringify(ArtistRespond.topTracksItems));
            return;

        case 'Track':
            updateList(JSON.stringify(SearchRespond.tracksItems));
            return;

        case 'Featured':
            updateList(JSON.stringify(FeaturedPlayListRespond.listItems));
            return;

        case 'GenresContent':
            updateList(JSON.stringify(GenresPlayListRespond.listItems));
            return;

        default:
            return;
    }
};

const updateList = (currentPlayList) => {
    WebStorage.setSessionStorage(WebStorageKeys.PLAYLIST, currentPlayList);
};

const PlayListContentReducer = (state = {actionType: ''}, action) => {
    switch (action.type) {
        case MainActions.getAudio().AUDIO_NEW_PLAY:
            transferList(action.payload);
            return {actionType: action.type};

        case MainActions.getAudio().AUDIO_PREV:
        case MainActions.getAudio().AUDIO_NEXT:
        case MainActions.getAudio().FORCE_UPDATE_AUDIO:
            return {actionType: action.type};

        default:
            return state;
    }
};

export default PlayListContentReducer;

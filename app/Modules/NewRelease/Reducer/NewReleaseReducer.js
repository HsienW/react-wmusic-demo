import is from 'is_js';
import NewReleaseRespond from '../../../ApiCenter/Browse/Respond/NewReleaseRespond';
import * as NewReleaseActions from '../Actions/NewReleaseActions';

const NewReleaseReducer = (state = {actionType: ''}, action) => {
    switch (action.type) {
        case NewReleaseActions.GET_NEW_RELEASE_SUCCESS:
            NewReleaseRespond.newReleaseItems.length = 0;
            NewReleaseRespond.newReleaseItems = action.payload.albums.items.filter((itemObj) => {
                return is.equal(itemObj.album_type, 'album');
            });
            return {actionType: action.type};

        case NewReleaseActions.FORCE_UPDATE_NEW_RELEASE:
            return {actionType: action.type};

        default:
            return state;
    }
};

export default NewReleaseReducer;

import WebStorage from '../../../WebStorage/WebStorage';
import * as WebStorageKeys from '../../../WebStorage/WebStorageKeys';
import * as PortalActions from '../Actions/PortalActions';

const PortalReducer = (state = {actionType: ''}, action) => {
    switch (action.type) {
        case PortalActions.GO_TO_PAGE:
            WebStorage.setSessionStorage(WebStorageKeys.PORTAL_URL, action.payload);
            return {actionType: action.type};

        case PortalActions.STOP_PORTAL:
            return {actionType: action.type};

        default:
            return state;
    }
};

export default PortalReducer;

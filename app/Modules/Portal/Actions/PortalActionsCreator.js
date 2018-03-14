import {createAction} from 'redux-actions';
import * as PortalActions from './PortalActions';

const sendGoToPage = createAction(PortalActions.GO_TO_PAGE);

const goToPage = (value) => {
    return (dispatch) => {
        dispatch(sendGoToPage(value));
    };
};

const stopPortal = createAction(PortalActions.STOP_PORTAL);

export {
    goToPage,
    stopPortal,
};

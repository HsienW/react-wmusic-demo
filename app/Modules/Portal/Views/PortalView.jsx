import React from 'react';
import PropTypes from 'prop-types';
import WebStorage from '../../../WebStorage/WebStorage';
import * as WebStorageKeys from '../../../WebStorage/WebStorageKeys';
import * as PortalActions from '../Actions/PortalActions';

export default class PortalView extends React.Component {
    componentWillReceiveProps(nextProps) {
        switch (nextProps.actionType) {
            case PortalActions.GO_TO_PAGE:
                this.goToPage(WebStorage.getSessionStorage(WebStorageKeys.PORTAL_URL));
                break;

            case PortalActions.STOP_PORTAL:
                break;

            default:
                break;
        }
    }

    goToPage = (url) => {
        this.props.history.push(`${url}`);
        this.props.PortalActionsCreator.stopPortal();
    };

    render() {
        return null;
    }
}

PortalView.propTypes = {
    actionType: PropTypes.string.isRequired,
    history: PropTypes.object.isRequired,
    PortalActionsCreator: PropTypes.object.isRequired,
};

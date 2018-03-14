import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PortalView from '../Views/PortalView';
import * as PortalActionsCreator from '../Actions/PortalActionsCreator';

export default connect(
    (state) => {
        return {actionType: state.PortalReducer.actionType};
    },
    (dispatch) => {
        return {
            PortalActionsCreator: bindActionCreators(PortalActionsCreator, dispatch)
        };
    }
)(PortalView);

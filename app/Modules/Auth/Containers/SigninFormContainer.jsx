import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SigninForm from '../Views/SigninForm';
import * as PortalActionsCreator from '../../Portal/Actions/PortalActionsCreator';

export default connect(
    (state) => {
        return {actionType: state};
    },
    (dispatch) => {
        return {
            PortalActionsCreator: bindActionCreators(PortalActionsCreator, dispatch),
        };
    }
)(SigninForm);

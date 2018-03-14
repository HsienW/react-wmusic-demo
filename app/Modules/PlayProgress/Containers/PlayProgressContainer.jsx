import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PlayProgressView from '../Views/PlayProgressView';
import * as AudioActionsCreator from '../../Audio/Actions/AudioActionsCreator';

export default connect(
    (state) => {
        return {actionType: state.PlayProgressReducer.actionType};
    },
    (dispatch) => {
        return {
            AudioActionsCreator: bindActionCreators(AudioActionsCreator, dispatch),
        };
    }
)(PlayProgressView);

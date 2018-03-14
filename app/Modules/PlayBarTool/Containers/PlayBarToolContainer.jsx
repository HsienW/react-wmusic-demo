import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PlayBarToolView from '../Views/PlayBarToolView';
import * as AudioActionsCreator from '../../Audio/Actions/AudioActionsCreator';

export default connect(
    (state) => {
        return {actionType: state.PlayBarToolReducer.actionType};
    },
    (dispatch) => {
        return {
            AudioActionsCreator: bindActionCreators(AudioActionsCreator, dispatch),
        };
    }
)(PlayBarToolView);

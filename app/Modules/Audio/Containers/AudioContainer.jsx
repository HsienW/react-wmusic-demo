import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AudioView from '../Views/AudioView';
import * as AudioActionsCreator from '../Actions/AudioActionsCreator';

export default connect(
    (state) => {
        return {actionType: state.AudioReducer.actionType};
    },
    (dispatch) => {
        return {
            AudioActionsCreator: bindActionCreators(AudioActionsCreator, dispatch),
        };
    }
)(AudioView);

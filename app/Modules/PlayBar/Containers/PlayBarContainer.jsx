import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PlayBarView from '../Views/PlayBarView';
import * as AudioActionsCreator from '../../Audio/Actions/AudioActionsCreator';

export default connect(
    (state) => {
        return {actionType: state};
    },
    (dispatch) => {
        return {
            AudioActionsCreator: bindActionCreators(AudioActionsCreator, dispatch),
        };
    }
)(PlayBarView);

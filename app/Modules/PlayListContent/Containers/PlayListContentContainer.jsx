import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PlayListContentView from '../Views/PlayListContentView';
import * as AudioActionsCreator from '../../Audio/Actions/AudioActionsCreator';

export default connect(
    (state) => {
        return {actionType: state.PlayListContentReducer.actionType};
    },
    (dispatch) => {
        return {
            AudioActionsCreator: bindActionCreators(AudioActionsCreator, dispatch),
        };
    }
)(PlayListContentView);

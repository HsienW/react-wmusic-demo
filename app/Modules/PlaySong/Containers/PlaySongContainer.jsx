import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PlaySongView from '../Views/PlaySongView';
import * as AudioActionsCreator from '../../Audio/Actions/AudioActionsCreator';

export default connect(
    (state) => {
        return {actionType: state.PlaySongReducer.actionType};
    },
    (dispatch) => {
        return {
            AudioActionsCreator: bindActionCreators(AudioActionsCreator, dispatch),
        };
    }
)(PlaySongView);

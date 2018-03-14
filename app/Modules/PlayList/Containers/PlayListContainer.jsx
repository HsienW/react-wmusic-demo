import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PlayListView from '../Views/PlayListView';
import * as AudioActionsCreator from '../../Audio/Actions/AudioActionsCreator';
import * as PlayListActionsCreator from '../Actions/PlayListActionsCreator';

export default connect(
    (state) => {
        return {actionType: state.PlayListReducer.actionType};
    },
    (dispatch) => {
        return {
            AudioActionsCreator: bindActionCreators(AudioActionsCreator, dispatch),
            PlayListActionsCreator: bindActionCreators(PlayListActionsCreator, dispatch),
        };
    }
)(PlayListView);

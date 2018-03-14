import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AlbumPlayListView from '../Views/AlbumPlayListView';
import * as AudioActionsCreator from '../../Audio/Actions/AudioActionsCreator';

export default connect(
    (state) => {
        return {actionType: state.AlbumPlayListReducer.actionType};
    },
    (dispatch) => {
        return {
            AudioActionsCreator: bindActionCreators(AudioActionsCreator, dispatch),
        };
    }
)(AlbumPlayListView);

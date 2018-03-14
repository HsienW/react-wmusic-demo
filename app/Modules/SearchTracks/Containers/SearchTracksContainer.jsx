import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SearchTracksView from '../Views/SearchTracksView';
import * as AudioActionsCreator from '../../Audio/Actions/AudioActionsCreator';

export default connect(
    (state) => {
        return {actionType: state.SearchTracksReducer.actionType};
    },
    (dispatch) => {
        return {
            AudioActionsCreator: bindActionCreators(AudioActionsCreator, dispatch),
        };
    }
)(SearchTracksView);

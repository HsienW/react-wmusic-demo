import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SearchAlbumsView from '../Views/SearchAlbumsView';
import * as AudioActionsCreator from '../../Audio/Actions/AudioActionsCreator';
import * as AlbumPlayListActionsCreator from '../../Album/Actions/AlbumPlayListActionsCreator';
import * as PortalActionsCreator from '../../Portal/Actions/PortalActionsCreator';

export default connect(
    (state) => {
        return {actionType: state.SearchAlbumsReducer.actionType};
    },
    (dispatch) => {
        return {
            AudioActionsCreator: bindActionCreators(AudioActionsCreator, dispatch),
            AlbumPlayListActionsCreator: bindActionCreators(AlbumPlayListActionsCreator, dispatch),
            PortalActionsCreator: bindActionCreators(PortalActionsCreator, dispatch)
        };
    }
)(SearchAlbumsView);

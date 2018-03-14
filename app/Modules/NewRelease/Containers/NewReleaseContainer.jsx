import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import NewReleaseView from '../Views/NewReleaseView';
import * as AlbumPlayListActionsCreator from '../../Album/Actions/AlbumPlayListActionsCreator';
import * as NewReleaseActionsCreator from '../Actions/NewReleaseActionsCreator';
import * as PortalActionsCreator from '../../Portal/Actions/PortalActionsCreator';

export default connect(
    (state) => {
        return {actionType: state.NewReleaseReducer.actionType};
    },
    (dispatch) => {
        return {
            AlbumPlayListActionsCreator: bindActionCreators(AlbumPlayListActionsCreator, dispatch),
            NewReleaseActionsCreator: bindActionCreators(NewReleaseActionsCreator, dispatch),
            PortalActionsCreator: bindActionCreators(PortalActionsCreator, dispatch),
        };
    }
)(NewReleaseView);

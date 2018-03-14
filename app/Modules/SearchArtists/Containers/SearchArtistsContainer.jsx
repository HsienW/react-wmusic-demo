import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SearchArtistsView from '../Views/SearchArtistsView';
import * as ArtistActionsCreator from '../../Artist/Actions/ArtistActionsCreator';
import * as PortalActionsCreator from '../../Portal/Actions/PortalActionsCreator';

export default connect(
    (state) => {
        return {actionType: state.SearchArtistsReducer.actionType};
    },
    (dispatch) => {
        return {
            ArtistActionsCreator: bindActionCreators(ArtistActionsCreator, dispatch),
            PortalActionsCreator: bindActionCreators(PortalActionsCreator, dispatch),
        };
    }
)(SearchArtistsView);

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import FeaturedView from '../Views/FeaturedView';
import * as FeaturedActionsCreator from '../Actions/FeaturedActionsCreator';
import * as PlayListActionsCreator from '../../PlayList/Actions/PlayListActionsCreator';
import * as PortalActionsCreator from '../../Portal/Actions/PortalActionsCreator';

export default connect(
    (state) => {
        return {actionType: state.FeaturedReducer.actionType};
    },
    (dispatch) => {
        return {
            FeaturedActionsCreator: bindActionCreators(FeaturedActionsCreator, dispatch),
            PortalActionsCreator: bindActionCreators(PortalActionsCreator, dispatch),
            PlayListActionsCreator: bindActionCreators(PlayListActionsCreator, dispatch)
        };
    }
)(FeaturedView);

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import GenresView from '../Views/GenresView';
import * as GenresActionsCreator from '../Actions/GenresActionsCreator';
import * as PlayListActionsCreator from '../../PlayList/Actions/PlayListActionsCreator';
import * as PortalActionsCreator from '../../Portal/Actions/PortalActionsCreator';

export default connect(
    (state) => {
        return {actionType: state.GenresReducer.actionType};
    },
    (dispatch) => {
        return {
            GenresActionsCreator: bindActionCreators(GenresActionsCreator, dispatch),
            PortalActionsCreator: bindActionCreators(PortalActionsCreator, dispatch),
            PlayListActionsCreator: bindActionCreators(PlayListActionsCreator, dispatch)
        };
    }
)(GenresView);

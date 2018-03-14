import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SearchBarView from '../Views/SearchBarView';
import * as PortalActionsCreator from '../../Portal/Actions/PortalActionsCreator';
import * as SearchBarActionsCreator from '../Actions/SearchBarActionsCreator';

export default connect(
    (state) => {
        return {actionType: state.SearchBarReducer.actionType};
    },
    (dispatch) => {
        return {
            PortalActionsCreator: bindActionCreators(PortalActionsCreator, dispatch),
            SearchBarActionsCreator: bindActionCreators(SearchBarActionsCreator, dispatch)
        };
    }
)(SearchBarView);

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SearchContentView from '../Views/SearchContentView';
import * as SearchBarActionsCreator from '../../SearchBar/Actions/SearchBarActionsCreator';

export default connect(
    (state) => {
        return {actionType: state.SearchContentReducer.actionType};
    },
    (dispatch) => {
        return {
            SearchBarActionsCreator: bindActionCreators(SearchBarActionsCreator, dispatch),
        };
    }
)(SearchContentView);

import React from 'react';
import is from 'is_js';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Input} from 'antd';

const Search = Input.Search;

const searchTypes = ['album', 'artist', 'playlist', 'track'];

const SearchBar = styled.div`  
    width: 78%;
    margin: 8%;
`;

export default class SearchBarView extends React.Component {
    handleSearch(value) {
        if (is.empty(value) || is.falsy(value) || is.space(value)) {
            return;
        }

        this.props.SearchBarActionsCreator.sendSearch(value, searchTypes);
        this.props.PortalActionsCreator.goToPage('search');
        this.props.SearchBarActionsCreator.forceUpdateSearch();
    }

    render() {
        return (
            <SearchBar>
                <Search
                    placeholder="Search good songs"
                    onSearch={value => this.handleSearch(value)}
                />
            </SearchBar>
        );

    }
}

SearchBarView.propTypes = {
    PortalActionsCreator: PropTypes.object.isRequired,
    SearchBarActionsCreator: PropTypes.object.isRequired,
};

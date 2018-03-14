import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Tabs} from 'antd';
import * as StyleCenter from '../../../StyleCenter/StyleCenter';
import SearchTracksContainer from '../../SearchTracks/Containers/SearchTracksContainer';
import SearchArtistsContainer from '../../SearchArtists/Containers/SearchArtistsContainer';
import SearchAlbumsContainer from '../../SearchAlbums/Containers/SearchAlbumsContainer';
import * as WebStorageKeys from '../../../WebStorage/WebStorageKeys';
import WebStorage from '../../../WebStorage/WebStorage';
import SearchRespond from '../../../ApiCenter/Search/Respond/SearchRespond';
import MainActions from '../../Main/Actions/MainAction';

const TabPane = Tabs.TabPane;

const SearchContent = styled.div`  
    width: calc(100% - ${StyleCenter.leftMenuWidth});
    height: calc(100% - ${StyleCenter.playBarHeight});
    padding: 2% 4%;
    float: right;
`;

export default class SearchContentView extends React.Component {
    componentWillReceiveProps(nextProps) {
        switch (nextProps.actionType) {
            case MainActions.getSearchBar().SEARCH_SUCCESS:
                this.currentList();
                break;

            case MainActions.getSearchBar().FORCE_UPDATE_SEARCH:
                break;

            default:
                break;
        }
    }

    currentList = (key) => {
        if(key === '3') {
            const currentList = JSON.stringify(SearchRespond.tracksItems);
            WebStorage.setSessionStorage(WebStorageKeys.PLAYLIST, currentList);
        }
    };

    render() {
        return (
            <SearchContent>
                <Tabs
                    defaultActiveKey="1"
                    onChange={this.currentList}
                    style={{height: '100%'}}
                >
                    <TabPane
                        tab="Artist"
                        key="1"
                    >
                        <SearchArtistsContainer />
                    </TabPane>
                    <TabPane
                        tab="Album"
                        key="2"
                    >
                        <SearchAlbumsContainer />
                    </TabPane>
                    <TabPane
                        tab="Music"
                        key="3"
                    >
                        <SearchTracksContainer />
                    </TabPane>
                </Tabs>
            </SearchContent>
        );
    }
}

SearchContentView.propTypes = {
    actionType: PropTypes.string.isRequired,
};

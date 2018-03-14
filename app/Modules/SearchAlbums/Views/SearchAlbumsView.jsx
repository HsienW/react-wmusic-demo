import React from 'react';
import PropTypes from 'prop-types';
import SearchAlbumsItem from './SearchAlbumsItem';
import styled from 'styled-components';
import SearchRespond from '../../../ApiCenter/Search/Respond/SearchRespond';
import MainActions from '../../Main/Actions/MainAction';
import * as StyleCenter from '../../../StyleCenter/StyleCenter';

const SearchAlbums = styled.div`
    height: 88%;
    overflow-y: auto;
    ${StyleCenter.scrollBar}
`;

export default class SearchAlbumsView extends React.Component {
    componentWillReceiveProps(nextProps) {
        switch (nextProps.actionType) {
            case MainActions.getSearchBar().FORCE_UPDATE_SEARCH:
                break;

            default:
                break;
        }
    }

    render() {
        return (
            <SearchAlbums>
                {
                    SearchRespond.albumsItems.map((itemObj) => {
                        return (
                            <SearchAlbumsItem
                                key={itemObj.id}
                                itemId={itemObj.id}
                                imageURL={itemObj.images[1].url}
                                albumName={itemObj.name}
                                artistName={itemObj.artists[0].name}
                                PortalActionsCreator={
                                    this.props.PortalActionsCreator
                                }
                                AlbumPlayListActionsCreator={
                                    this.props.AlbumPlayListActionsCreator
                                }
                            />
                        );
                    })
                }
            </SearchAlbums>
        );
    }
}

SearchAlbumsView.propTypes = {
    actionType: PropTypes.string.isRequired,
    PortalActionsCreator: PropTypes.object.isRequired,
    AlbumPlayListActionsCreator: PropTypes.object.isRequired
};

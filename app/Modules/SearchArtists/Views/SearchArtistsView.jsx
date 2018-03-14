import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SearchArtistsItem from './SearchArtistsItem';
import SearchRespond from '../../../ApiCenter/Search/Respond/SearchRespond';
import MainActions from '../../Main/Actions/MainAction';
import * as StyleCenter from '../../../StyleCenter/StyleCenter';

const SearchArtists = styled.div`  
    height: 74%;
    overflow-y: auto;
    ${StyleCenter.scrollBar}
`;


export default class SearchArtistsView extends React.Component {
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
            <SearchArtists>
                {
                    SearchRespond.artistsItems.map((itemObj) => {
                        return (
                            <SearchArtistsItem
                                key={itemObj.id}
                                imageURL={itemObj.images[1].url}
                                artistId={itemObj.id}
                                artistName={itemObj.name}
                                followers={itemObj.followers.total}
                                ArtistActionsCreator={
                                    this.props.ArtistActionsCreator
                                }
                                PortalActionsCreator={
                                    this.props.PortalActionsCreator
                                }
                            />
                        );
                    })
                }
            </SearchArtists>
        );
    }
}

SearchArtistsView.propTypes = {
    actionType: PropTypes.string.isRequired,
    ArtistActionsCreator: PropTypes.object.isRequired,
    PortalActionsCreator: PropTypes.object.isRequired
};

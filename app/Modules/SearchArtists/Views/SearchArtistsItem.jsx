import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Avatar} from 'antd';
import WebStorage from '../../../WebStorage/WebStorage';
import * as WebStorageKeys from '../../../WebStorage/WebStorageKeys';

const countryId = 'US';

const Item = styled.div`
    cursor:pointer;
    margin: 1% 2%;
    display: inline-block;
`;

const Name = styled.div` 
    font-size: 1.42em;
    text-align: center;
    text-overflow : ellipsis;
`;

export default class SearchArtistsItem extends React.Component {
    handleClick = () => {
        WebStorage.setSessionStorage(WebStorageKeys.ARTIST_NAME, this.props.artistName);
        WebStorage.setSessionStorage(WebStorageKeys.ARTIST_FANS, this.props.followers);
        WebStorage.setSessionStorage(WebStorageKeys.ARTIST_IMAGE_URL, this.props.imageURL);

        this.props.ArtistActionsCreator.getArtistAlbum(this.props.artistId);
        this.props.ArtistActionsCreator.getArtistTopTrack(this.props.artistId, countryId);
        this.props.PortalActionsCreator.goToPage('artist');
    };

    render() {
        return (
            <Item onClick={this.handleClick}>
                <Avatar
                    size='large'
                    src={this.props.imageURL}
                    style={{
                        width: '200px',
                        height: '200px',
                        borderRadius: '999px',
                        float: 'left',
                        marginBottom: '6%'
                    }}
                />
                <Name>{this.props.artistName}</Name>
            </Item>
        );

    }
}

SearchArtistsItem.propTypes = {
    imageURL: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired,
    artistId: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    ArtistActionsCreator: PropTypes.object.isRequired,
    PortalActionsCreator: PropTypes.object.isRequired
};

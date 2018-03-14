import React from 'react';
import PropTypes from 'prop-types';
import {Card} from 'antd';
import WebStorage from '../../../WebStorage/WebStorage';
import * as WebStorageKeys from '../../../WebStorage/WebStorageKeys';

const {Meta} = Card;

export default class ArtistAlbumItem extends React.Component {
    handleClick = () => {
        WebStorage.setSessionStorage(WebStorageKeys.ARTIST_NAME, this.props.artistName);
        WebStorage.setSessionStorage(WebStorageKeys.PLAYLIST_NAME, this.props.itemName);
        WebStorage.setSessionStorage(WebStorageKeys.PLAYLIST_IMAGE, this.props.imageURL);

        this.props.AlbumPlayListActionsCreator.getAlbumPlayList(this.props.itemId);
        this.props.AlbumPlayListActionsCreator.forceUpdateAlbumPlayList();
        this.props.PortalActionsCreator.goToPage('album');
    };

    render() {
        return (
            <Card
                hoverable
                onClick={this.handleClick}
                cover={<img src={this.props.imageURL} style={{width: 160, height: 160}}/>}
                style={{
                    width: 160,
                    margin: '24px 12px',
                    float: 'left'
                }}
            >
                <Meta
                    title={this.props.itemName}
                />
            </Card>
        );
    }
}

ArtistAlbumItem.propTypes = {
    itemId: PropTypes.string.isRequired,
    itemName: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    PortalActionsCreator: PropTypes.object.isRequired,
    AlbumPlayListActionsCreator: PropTypes.object.isRequired
};

import React from 'react';
import PropTypes from 'prop-types';
import {Card} from 'antd';
import WebStorage from '../../../WebStorage/WebStorage';
import * as WebStorageKeys from '../../../WebStorage/WebStorageKeys';

const {Meta} = Card;

export default class NewAlbumItem extends React.Component {
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
                cover={<img src={this.props.imageURL} />}
                style={{
                    width: 190,
                    height: 250,
                    margin: '6px 20px',
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

NewAlbumItem.propTypes = {
    itemId: PropTypes.string.isRequired,
    itemName: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired,
    PortalActionsCreator: PropTypes.object.isRequired,
    AlbumPlayListActionsCreator: PropTypes.object.isRequired
};

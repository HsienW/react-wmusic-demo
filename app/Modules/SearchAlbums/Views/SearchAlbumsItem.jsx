import React from 'react';
import PropTypes from 'prop-types';
import {Card} from 'antd';
import * as WebStorageKeys from '../../../WebStorage/WebStorageKeys';
import WebStorage from '../../../WebStorage/WebStorage';

const {Meta} = Card;

export default class SearchAlbumsView extends React.Component {
    handleClick = () =>{
        WebStorage.setSessionStorage(WebStorageKeys.ARTIST_NAME, this.props.artistName);
        WebStorage.setSessionStorage(WebStorageKeys.PLAYLIST_NAME, this.props.albumName);
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
                cover={<img src={this.props.imageURL} style={{width: 190, height: 190}}/>}
                style={{
                    width: 190,
                    margin: '1%',
                    float: 'left'
                }}
            >
                <Meta
                    title={this.props.albumName}
                    description={this.props.artistName}
                />
            </Card>
        );

    }
}

SearchAlbumsView.propTypes = {
    imageURL: PropTypes.string.isRequired,
    itemId: PropTypes.string.isRequired,
    albumName: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired,
    PortalActionsCreator: PropTypes.object.isRequired,
    AlbumPlayListActionsCreator: PropTypes.object.isRequired
};

import React from 'react';
import PropTypes from 'prop-types';
import {Card} from 'antd';
import WebStorage from '../../../WebStorage/WebStorage';
import * as WebStorageKeys from '../../../WebStorage/WebStorageKeys';

const {Meta} = Card;

export default class GenresContentItem extends React.Component {
    handleClick = () => {
        WebStorage.setSessionStorage(WebStorageKeys.PLAYLIST_NAME, this.props.itemName);
        WebStorage.setSessionStorage(WebStorageKeys.PLAYLIST_TOTAL, this.props.itemTotal);
        WebStorage.setSessionStorage(WebStorageKeys.PLAYLIST_IMAGE, this.props.imageURL);
        WebStorage.setSessionStorage(WebStorageKeys.PLAYLIST_SOURCE, 'GenresContent');

        this.props.PlayListActionsCreator.getPlayList('spotify', this.props.itemId);
        this.props.PlayListActionsCreator.forceUpdatePlayList();
        this.props.PortalActionsCreator.goToPage('playlist');
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

GenresContentItem.propTypes = {
    itemId: PropTypes.string.isRequired,
    itemName: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    itemTotal: PropTypes.number.isRequired,
    PortalActionsCreator: PropTypes.object.isRequired,
    PlayListActionsCreator: PropTypes.object.isRequired
};

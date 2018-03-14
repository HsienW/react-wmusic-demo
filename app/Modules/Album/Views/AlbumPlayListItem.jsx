import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {List} from 'antd';
import WebStorage from '../../../WebStorage/WebStorage';
import * as WebStorageKeys from '../../../WebStorage/WebStorageKeys';
import * as StyleCenter from '../../../StyleCenter/StyleCenter';

const ItemFocus = styled.div`
    cursor:pointer;
    padding-left: 1%;
    &:hover {
        background-color: ${StyleCenter.minorColor};
    }
`;

export default class AlbumPlayListItem extends React.Component {
    handleClick = () => {
        WebStorage.setSessionStorage(WebStorageKeys.TRACK_ID, this.props.itemId);
        WebStorage.setSessionStorage(WebStorageKeys.TRACK_URL, this.props.trackURL);
        WebStorage.setSessionStorage(WebStorageKeys.TRACK_IMAGE, this.props.imageURL);
        WebStorage.setSessionStorage(WebStorageKeys.TRACK_NAME, this.props.itemName);
        WebStorage.setSessionStorage(WebStorageKeys.TRACK_SUBTITLE, this.props.itemSubtitle);

        this.props.AudioActionsCreator.newPlayClicked('Album');
    };

    render() {
        return (
            <ItemFocus>
                <List.Item
                    key={this.props.itemId}
                    onClick={this.handleClick}
                >
                    <List.Item.Meta
                        title={this.props.itemName}
                    />
                    <div>{this.props.itemDuration}</div>
                </List.Item>
            </ItemFocus>
        );

    }
}

AlbumPlayListItem.propTypes = {
    imageURL: PropTypes.string.isRequired,
    trackURL: PropTypes.string.isRequired,
    itemId: PropTypes.string.isRequired,
    itemName: PropTypes.string.isRequired,
    itemSubtitle: PropTypes.string.isRequired,
    itemDuration: PropTypes.string.isRequired,
    AudioActionsCreator: PropTypes.object.isRequired
};

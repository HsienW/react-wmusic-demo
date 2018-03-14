import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Card, List} from 'antd';
import AlbumPlayListItem from './AlbumPlayListItem';
import AlbumPlayListRespond from '../../../ApiCenter/Album/Respond/AlbumPlayListRespond';
import WebStorage from '../../../WebStorage/WebStorage';
import * as WebStorageKeys from '../../../WebStorage/WebStorageKeys';
import * as AlbumPlayListActions from '../Actions/AlbumPlayListActions';
import * as StyleCenter from '../../../StyleCenter/StyleCenter';

const {Meta} = Card;

const AlbumPlayList = styled.div`
    width: calc(100% - ${StyleCenter.leftMenuWidth});
    height: calc(100% - ${StyleCenter.playBarHeight});
    overflow-y: auto;
    padding: 2% 4%;
    display: inline-block;
    ${StyleCenter.scrollBar}
`;

const ListArea = styled.div`
    width: 76%;
    height: 94%;
    overflow-y: auto;
    padding: 10px;
    display: inline-block;
    ${StyleCenter.scrollBar}
`;

export default class AlbumPlayListView extends React.Component {
    constructor() {
        super();
        this.state = {
            listTotal: 0,
            listName: '',
            listImageURL: '',
            artistName: ''
        };
    }

    componentWillMount() {
        this.setState({
            listName: WebStorage.getSessionStorage(WebStorageKeys.PLAYLIST_NAME),
            listImageURL: WebStorage.getSessionStorage(WebStorageKeys.PLAYLIST_IMAGE),
            artistName: WebStorage.getSessionStorage(WebStorageKeys.ARTIST_NAME)
        });
    }

    componentWillReceiveProps(nextProps) {
        switch (nextProps.actionType) {
            case AlbumPlayListActions.GET_ALBUM_PLAY_LIST_SUCCESS:
                this.setState({listTotal: AlbumPlayListRespond.listItems.length});
                break;

            default:
                break;
        }
    }

    render() {
        return (
            <AlbumPlayList>
                <Card
                    hoverable
                    cover={<img src={this.state.listImageURL}/>}
                    style={{
                        width: 300,
                        margin: '8px 2% 8px 0',
                        float: 'left'
                    }}
                >
                    <Meta
                        title={this.state.listName}
                        description={
                            `${this.state.listTotal} Songs ‧
                             ${this.state.artistName}`
                        }
                    />
                </Card>
                <ListArea>
                    <List
                        dataSource={AlbumPlayListRespond.listItems}
                        renderItem={item => (
                            <AlbumPlayListItem
                                imageURL={this.state.listImageURL}
                                trackURL={item.preview_url}
                                itemId={item.id}
                                itemName={item.name}
                                itemSubtitle={this.state.listName}
                                itemDuration={'00:30'}
                                AudioActionsCreator={
                                    this.props.AudioActionsCreator
                                }
                            />
                        )}
                    />
                </ListArea>
            </AlbumPlayList>
        );
    }
}

AlbumPlayListView.propTypes = {
    actionType: PropTypes.string.isRequired,
    AudioActionsCreator: PropTypes.object.isRequired
};

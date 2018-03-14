import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Card, List} from 'antd';
import PlayListItem from './PlayListItem';
import FeaturedPlayListRespond from '../../../ApiCenter/PlayList/Respond/FeaturedPlayListRespond';
import GenresPlayListRespond from '../../../ApiCenter/PlayList/Respond/GenresPlayListRespond';
import WebStorage from '../../../WebStorage/WebStorage';
import * as WebStorageKeys from '../../../WebStorage/WebStorageKeys';
import * as PlayListActions from '../Actions/PlayListActions';
import * as StyleCenter from '../../../StyleCenter/StyleCenter';

const {Meta} = Card;

const PlayList = styled.div`  
    width: calc(100% - ${StyleCenter.leftMenuWidth});
    height: calc(100% - ${StyleCenter.playBarHeight});
    padding: 2% 4%;
    float: right;
`;

const ListArea = styled.div`  
    width: 76%;
    height: 94%;
    overflow-y: auto;
    padding: 8px 24px;
    ${StyleCenter.scrollBar}
`;

export default class PlayListView extends React.Component {
    constructor() {
        super();
        this.state = {
            listTotal: 0,
            listName: '',
            listImageURL: '',
            listSource: []
        };
    }

    componentWillMount() {
        this.setState({
            listTotal: WebStorage.getSessionStorage(WebStorageKeys.PLAYLIST_TOTAL),
            listName: WebStorage.getSessionStorage(WebStorageKeys.PLAYLIST_NAME),
            listImageURL: WebStorage.getSessionStorage(WebStorageKeys.PLAYLIST_IMAGE),
        });
    }

    componentWillReceiveProps(nextProps) {
        switch (nextProps.actionType) {
            case PlayListActions.GET_PLAY_LIST_SUCCESS:
                this.handleSource();
                break;

            case PlayListActions.FORCE_UPDATE_PLAY_LIST:
                break;

            default:
                break;
        }
    }

    handleSource = () => {
        const listName = WebStorage.getSessionStorage(WebStorageKeys.PLAYLIST_SOURCE);

        switch (listName) {
            case 'Featured':
                this.setState({listSource: FeaturedPlayListRespond.listItems});
                return;

            case 'GenresContent':
                this.setState({listSource: GenresPlayListRespond.listItems});
                return;

            default:
                return;
        }
    };

    render() {
        return (
            <PlayList>
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
                        description={`${this.state.listTotal} Songs`}
                    />
                </Card>
                <ListArea>
                    <List
                        dataSource={this.state.listSource}
                        renderItem={item => (
                            <PlayListItem
                                imageURL={item.album.images[2].url}
                                trackURL={item.preview_url}
                                itemId={item.id}
                                itemName={item.name}
                                itemSubtitle={item.album.name}
                                itemDuration={'00:30'}
                                AudioActionsCreator={
                                    this.props.AudioActionsCreator
                                }
                            />
                        )}
                    />
                </ListArea>
            </PlayList>
        );
    }
}

PlayListView.propTypes = {
    actionType: PropTypes.string.isRequired,
    AudioActionsCreator: PropTypes.object.isRequired
};

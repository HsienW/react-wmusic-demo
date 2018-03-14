import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Card, List} from 'antd';
import SearchTracksItem from './SearchTracksItem';
import SearchRespond from '../../../ApiCenter/Search/Respond/SearchRespond';
import MainActions from '../../Main/Actions/MainAction';
import * as StyleCenter from '../../../StyleCenter/StyleCenter';

const {Meta} = Card;

const SearchTracks = styled.div`  
    height: 96%;
    overflow-y: auto;
    ${StyleCenter.scrollBar}
`;

const ListArea = styled.div` 
    height: 100%; 
    width: 80%;
    overflow-y: auto;
    float: left;
    ${StyleCenter.scrollBar}
`;

export default class SearchTracksView extends React.Component {
    constructor() {
        super();
        this.state = {
            artistName: '',
            artistImage: ''
        };
    }

    componentWillMount() {
        this.trackImage();
    }

    componentWillReceiveProps(nextProps) {
        switch (nextProps.actionType) {
            case MainActions.getSearchBar().SEARCH_SUCCESS:
                this.trackImage();
                break;

            case MainActions.getSearchBar().FORCE_UPDATE_SEARCH:
                break;

            default:
                break;
        }
    }

    trackImage = () => {
        this.setState({
            artistName: SearchRespond.tracksItems[0].name,
            artistImage: SearchRespond.tracksItems[0].album.images[1].url
        });
    };

    render() {
        return (
            <SearchTracks>
                <Card
                    hoverable
                    cover={<img src={this.state.artistImage}/>}
                    style={{
                        width: 240,
                        margin: '8px 2% 8px 0',
                        float: 'left'
                    }}
                >
                    <Meta
                        title={this.state.artistName}
                    />
                </Card>
                <ListArea>
                    <List
                        dataSource={SearchRespond.tracksItems}
                        renderItem={item => (
                            <SearchTracksItem
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
            </SearchTracks>
        );
    }
}

SearchTracksView.propTypes = {
    actionType: PropTypes.string.isRequired,
    AudioActionsCreator: PropTypes.object.isRequired
};

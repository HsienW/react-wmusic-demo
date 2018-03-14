import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {List} from 'antd';
import ArtistPlayListItem from './ArtistPlayListItem';
import ArtistRespond from '../../../ApiCenter/Artist/Respond/ArtistRespond';
import * as StyleCenter from '../../../StyleCenter/StyleCenter';

const ArtistPlayList = styled.div`
    height: 100%;
    overflow-y: auto;
    padding-left: 4%;
    ${StyleCenter.scrollBar}
`;

export default class ArtistPlayListView extends React.Component {
    render() {
        return (
            <ArtistPlayList>
                <List
                    dataSource={ArtistRespond.topTracksItems}
                    renderItem={item => (
                        <ArtistPlayListItem
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
            </ArtistPlayList>
        );
    }
}

ArtistPlayListView.propTypes = {
    AudioActionsCreator: PropTypes.object.isRequired
};
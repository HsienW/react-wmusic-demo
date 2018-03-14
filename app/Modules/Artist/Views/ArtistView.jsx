import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Avatar} from 'antd';
import ArtistPlayList from './ArtistPlayListView';
import ArtistAlbum from './ArtistAlbumView';
import WebStorage from '../../../WebStorage/WebStorage';
import * as WebStorageKeys from '../../../WebStorage/WebStorageKeys';
import * as StyleCenter from '../../../StyleCenter/StyleCenter';

const ArtistContent = styled.div`  
    width: calc(100% - ${StyleCenter.leftMenuWidth});
    height: calc(100% - ${StyleCenter.playBarHeight});
    padding: 2% 4%;
    float: right;
    overflow-y: auto;
    ${StyleCenter.scrollBar}
`;

const Data = styled.div`  
    float: left;
    margin-top: 4%;
`;

const Name = styled.div` 
    font-size: 2.4em;
    font-weight: 500;
    text-align: center;
`;

const Fans = styled.div` 
    font-size: 1.15em;
    text-align: center;
    color: rgba(0, 0, 0, 0.45);
    margin-top: 2%;
`;

const TopSong = styled.div` 
    float: left;
    width: 82%;
    height: 46%;
`;

const TopTitle = styled.div`
    font-size: 1.85em;
    font-weight: 500;
    padding-left: 4%;
    margin-bottom: 1%;
`;

const AlbumData = styled.div` 
    float: left;
    width: 100%;
    margin-top: 6%;
`;

const AlbumTitle = styled.div`
    font-size: 1.85em;
    font-weight: 500;
    padding-left: 2%;
`;

export default class ArtistView extends React.Component {
    constructor() {
        super();
        this.state = {
            imageURL: '',
            artistName: '',
            artistFans: 0
        };
    }

    componentWillMount() {
        this.setState({
            imageURL: WebStorage.getSessionStorage(WebStorageKeys.ARTIST_IMAGE_URL),
            artistName: WebStorage.getSessionStorage(WebStorageKeys.ARTIST_NAME),
            artistFans: WebStorage.getSessionStorage(WebStorageKeys.ARTIST_FANS)
        });
    }

    render() {
        return (
            <ArtistContent>
                <Data>
                    <Avatar
                        size="large"
                        src={this.state.imageURL}
                        style={{
                            width: '260px',
                            height: '260px',
                            borderRadius: '999px',
                            float: 'left',
                            margin: '-10% 1% 6% 0%'
                        }}
                    />
                    <Name>{this.state.artistName}</Name>
                    <Fans>{this.state.artistFans} Followers</Fans>
                </Data>
                <TopSong>
                    <TopTitle>Top Songs</TopTitle>
                    <ArtistPlayList
                        AudioActionsCreator={
                            this.props.AudioActionsCreator
                        }
                    />
                </TopSong>
                <AlbumData>
                    <AlbumTitle>Albums</AlbumTitle>
                    <ArtistAlbum
                        PortalActionsCreator={
                            this.props.PortalActionsCreator
                        }
                        AlbumPlayListActionsCreator={
                            this.props.AlbumPlayListActionsCreator
                        }
                    />
                </AlbumData>
            </ArtistContent>
        );
    }
}

ArtistView.propTypes = {
    AudioActionsCreator: PropTypes.object.isRequired,
    PortalActionsCreator: PropTypes.object.isRequired,
    AlbumPlayListActionsCreator: PropTypes.object.isRequired
};

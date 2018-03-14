import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Avatar} from 'antd';
import WebStorage from '../../../WebStorage/WebStorage';
import * as WebStorageKeys from '../../../WebStorage/WebStorageKeys';
import MainActions from '../../Main/Actions/MainAction';

const PlaybarSong = styled.div`
    height: 8%;
    width: 26%;
    min-width: 350px;
    position: fixed;
    left: 4%;
    bottom: 8px;
`;

const SongName = styled.div`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 80%;
    font-size: 1.7em;
    color: #000000;
    float: left;
    padding: 2px 14px;
    min-width: 100px;
`;

const SongSubtitle = styled.div`
     text-overflow: ellipsis;
     overflow: hidden;
     white-space: nowrap;
     width: 80%;
     font-size: 1.14em;
     color: #FFFFFF;
     float: left;
     padding: 0 14px;
     min-width: 100px;
`;

export default class PlaySongView extends React.Component {
    constructor() {
        super();
        this.state = {
            songImageURL: '',
            songName: '',
            songSubtitle: '',
            showData: false
        };
    }

    componentWillReceiveProps(nextProps) {
        switch (nextProps.actionType) {
            case MainActions.getAudio().AUDIO_NEW_PLAY:
                this.updateSong();
                break;

            case MainActions.getAudio().FORCE_UPDATE_AUDIO:
                break;

            default:
                break;
        }
    }

    updateSong = () => {
        this.setState({
            songImageURL: WebStorage.getSessionStorage(WebStorageKeys.TRACK_IMAGE),
            songName: WebStorage.getSessionStorage(WebStorageKeys.TRACK_NAME),
            songSubtitle: WebStorage.getSessionStorage(WebStorageKeys.TRACK_SUBTITLE),
            showData: true
        });
    };

    render() {
        return (
            <PlaybarSong>
                {
                    this.state.showData ?
                        <div
                            style={{
                                width: '100%',
                                minWidth: '350px'
                            }}
                        >
                            <Avatar
                                shape="square"
                                size="large"
                                src={this.state.songImageURL}
                                style={{
                                    width: '70px',
                                    height: '70px',
                                    float: 'left',
                                }}
                            />
                            <SongName>
                                {this.state.songName}
                            </SongName>
                            <SongSubtitle>
                                {this.state.songSubtitle}
                            </SongSubtitle>
                        </div>
                        : null
                }
            </PlaybarSong>
        );
    }
}

PlaySongView.propTypes = {
    actionType: PropTypes.string.isRequired,
    AudioActionsCreator: PropTypes.object.isRequired
};

import React from 'react';
import PropTypes from 'prop-types';
import MainActions from '../../Main/Actions/MainAction';
import WebStorage from '../../../WebStorage/WebStorage';
import * as WebStorageKeys from '../../../WebStorage/WebStorageKeys';

export default class PlayListContentView extends React.Component {
    constructor() {
        super();
        this.state = {
            listContent: []
        };
    }

    componentWillReceiveProps(nextProps) {
        switch (nextProps.actionType) {
            case MainActions.getAudio().AUDIO_NEW_PLAY:
                this.listContent();
                break;

            case MainActions.getAudio().AUDIO_PREV:
                this.prevIndex();
                break;

            case MainActions.getAudio().AUDIO_NEXT:
                this.nextIndex();
                break;

            case MainActions.getAudio().FORCE_UPDATE_AUDIO:
                break;

            default:
                break;
        }
    }

    listContent = () => {
        const currentPlayList = JSON.parse(WebStorage.getSessionStorage(WebStorageKeys.PLAYLIST));
        this.setState({listContent: currentPlayList});
    };

    prevIndex = () => {
        const trackId = WebStorage.getSessionStorage(WebStorageKeys.TRACK_ID);
        const trackIndex = this.state.listContent.findIndex((Obj) => {return Obj.id === trackId;});
        const lastIndex = this.state.listContent.length - 1;

        if (trackIndex === 0) {
            const prevTrack = this.state.listContent[lastIndex];
            this.newTrack(prevTrack);
        } else {
            const prevTrack = this.state.listContent[trackIndex - 1];
            this.newTrack(prevTrack);
        }
    };

    nextIndex = () => {
        const trackId = WebStorage.getSessionStorage(WebStorageKeys.TRACK_ID);
        const trackIndex = this.state.listContent.findIndex((Obj) => {return Obj.id === trackId;});

        if (trackIndex === this.state.listContent.length - 1) {
            const nextTrack = this.state.listContent[0];
            this.newTrack(nextTrack);
        } else {
            const nextTrack = this.state.listContent[trackIndex + 1];
            this.newTrack(nextTrack);
        }
    };

    newTrack = (track) => {
        WebStorage.setSessionStorage(WebStorageKeys.TRACK_ID, track.id);
        WebStorage.setSessionStorage(WebStorageKeys.TRACK_URL, track.preview_url);
        WebStorage.setSessionStorage(WebStorageKeys.TRACK_IMAGE, track.album.images[2].url);
        WebStorage.setSessionStorage(WebStorageKeys.TRACK_NAME, track.name);
        WebStorage.setSessionStorage(WebStorageKeys.TRACK_SUBTITLE, track.album.name);

        this.props.AudioActionsCreator.newPlayClicked('Track');
    };

    render() {
        return (
            null
        );
    }
}

PlayListContentView.propTypes = {
    actionType: PropTypes.string.isRequired,
    AudioActionsCreator: PropTypes.object.isRequired
};

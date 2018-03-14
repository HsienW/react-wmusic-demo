import React from 'react';
import PropTypes from 'prop-types';
import WebStorage from '../../../WebStorage/WebStorage';
import * as WebStorageKeys from '../../../WebStorage/WebStorageKeys';
import * as AudioActions from '../Actions/AudioActions';

const audioPlayer = new Audio();

export default class AudioView extends React.Component {
    constructor() {
        super();
        this.state = {
            audioURL: '',
            pauseState: false,
            pauseTime: 0,
        };
    }

    componentDidMount() {
        audioPlayer.addEventListener('ended', this.playEnded);
    }

    componentWillReceiveProps(nextProps) {
        switch (nextProps.actionType) {
            case AudioActions.AUDIO_NEW_PLAY:
                this.newPlay();
                break;

            case AudioActions.AUDIO_PLAY:
                this.audioPlay();
                break;

            case AudioActions.AUDIO_STOP:
                this.audioStop();
                break;

            case AudioActions.UPDATE_VOLUME:
                this.handleVolume();
                break;

            case AudioActions.UPDATE_PLAY_PROGRESS:
                this.handleProgress();
                break;

            case AudioActions.AUDIO_ENDED:
            case AudioActions.FORCE_UPDATE_AUDIO:
                break;

            default:
                break;
        }
    }

    componentWillUnmount() {
        audioPlayer.removeEventListener('ended', this.playEnded);
    }

    newPlay = () => {
        const getAudioURL = WebStorage.getSessionStorage(WebStorageKeys.TRACK_URL);
        this.setState({audioURL: getAudioURL}, () => {
            audioPlayer.src = this.state.audioURL;
            audioPlayer.play();
        });
        this.updateAction();
    };

    audioPlay = () => {
        audioPlayer.currentTime = this.state.pauseTime;
        audioPlayer.play();
        this.setState({pauseState: false});
        this.updateAction();
    };

    audioStop = () => {
        audioPlayer.pause();
        this.setState({pauseState: !this.state.pauseState});
        this.setState({pauseTime: audioPlayer.currentTime}, () => {
            WebStorage.setSessionStorage(WebStorageKeys.PAUSE_TIME, this.state.pauseTime);
        });
        this.updateAction();
    };

    handleProgress = () => {
        const newTime = WebStorage.getSessionStorage(WebStorageKeys.NEW_PROGRESS_TIME);
        this.setState({pauseTime: newTime}, () => {
            audioPlayer.currentTime = this.state.pauseTime;
        });
        this.updateAction();
    };

    handleVolume = () => {
        audioPlayer.volume = WebStorage.getSessionStorage(WebStorageKeys.PLAY_VOLUME);
        this.updateAction();
    };

    playEnded = () => {
        this.props.AudioActionsCreator.audioEnded();
    };

    updateAction = () => {
        this.props.AudioActionsCreator.forceUpdateAudio();
    };
    
    render() {
        return (
            null
        );
    }
}

AudioView.propTypes = {
    actionType: PropTypes.string.isRequired,
    AudioActionsCreator: PropTypes.object.isRequired,
};

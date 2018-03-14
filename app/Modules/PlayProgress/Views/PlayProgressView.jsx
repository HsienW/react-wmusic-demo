import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Line} from 'rc-progress';
import MainActions from '../../Main/Actions/MainAction';
import WebStorage from '../../../WebStorage/WebStorage';
import * as WebStorageKeys from '../../../WebStorage/WebStorageKeys';
import './Res/PlayProgressView.css';

const PlayProgress = styled.div`
    width: 34%;
    min-width: 500px;
    margin: auto;
`;

const PlayTime = styled.div`
    width: 5%;
    min-width: 32px;
    margin: -10px 4px 0 4px;
    color: #FFFFFF;
    float: left;
    font-size: 1em;
`;

export default class PlayProgressView extends React.Component {
    constructor() {
        super();
        this.state = {
            progress: 0,
            progressTime: 0,
            playStop: false,
            currentTrackId: ''
        };
    }

    componentDidMount() {
        const progressBar = document.querySelector('.progress');
        WebStorage.setSessionStorage(WebStorageKeys.PROGRESS_BAR, progressBar.offsetWidth);
        progressBar.addEventListener('click', this.handleClick);
    }

    componentWillReceiveProps(nextProps) {
        switch (nextProps.actionType) {
            case MainActions.getAudio().AUDIO_NEW_PLAY:
                this.setState({
                    progress: 0,
                    progressTime: 0,
                    playStop: false
                });
                this.updateProgress();
                this.updateTime();
                break;

            case MainActions.getAudio().AUDIO_PLAY:
                this.setState({playStop: false});
                this.updateProgress();
                this.updateTime();
                break;

            case MainActions.getAudio().AUDIO_STOP:
                this.setState({playStop: true});
                break;

            case MainActions.getAudio().FORCE_UPDATE_AUDIO:
                break;

            default:
                break;
        }
    }

    componentWillUnmount() {
        const progressBar = document.querySelector('.progress');
        progressBar.removeEventListener('click', this.handleClick);
    }

    updateProgress = () => {
        const trackId = WebStorage.getSessionStorage(WebStorageKeys.TRACK_ID);

        const pushProgress = setInterval(() => {
            if (trackId !== this.state.currentTrackId
                || this.state.progress >= 99
                || this.state.playStop) {
                clearInterval(pushProgress);
            }
            this.setState({progress: this.state.progress + 0.5});
        }, 150);

        this.setState({currentTrackId: trackId});
    };

    updateTime = () => {
        const trackId = WebStorage.getSessionStorage(WebStorageKeys.TRACK_ID);

        const progressTime = setInterval(() => {
            if (trackId !== this.state.currentTrackId
                || this.state.progressTime >= 29
                || this.state.playStop) {
                clearInterval(progressTime);
            }
            this.setState({progressTime: this.state.progressTime + 1});
        }, 1000);

        this.setState({currentTrackId: trackId});
    };

    handleClick = (event) => {
        const totalProgress = WebStorage.getSessionStorage(WebStorageKeys.PROGRESS_BAR);
        const newProgress = event.offsetX / totalProgress;
        const newTime = (newProgress * 30).toFixed(0);
        WebStorage.setSessionStorage(WebStorageKeys.NEW_PROGRESS_TIME, newTime);

        this.setState({
            progress: newProgress * 100,
            progressTime: Number(newTime)
        });
        this.props.AudioActionsCreator.updatePlayProgress();
    };

    render() {
        return (
            <PlayProgress>
                <PlayTime>
                    00:{this.state.progressTime}
                </PlayTime>
                <div className='progress'>
                    <Line
                        percent={this.state.progress}
                        trailColor={'#FFFFFF'}
                        strokeColor={'#A09F9F'}
                        trailWidth={0.8}
                        strokeWidth={0.8}
                        style={{
                            float: 'left'
                        }}
                    />
                </div>
                <PlayTime>
                    00:30
                </PlayTime>
            </PlayProgress>
        );

    }
}

PlayProgressView.propTypes = {
    actionType: PropTypes.string.isRequired,
    AudioActionsCreator : PropTypes.object.isRequired
};

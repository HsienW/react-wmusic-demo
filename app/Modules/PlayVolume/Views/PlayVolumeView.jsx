import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Icon} from 'antd';
import WebStorage from '../../../WebStorage/WebStorage';
import * as WebStorageKeys from '../../../WebStorage/WebStorageKeys';

const PlayVolume = styled.div`
    width: 10%;
    right: 1%;
    margin-top: -30px;
    position: fixed;
    display: inline-flex;
`;

export default class PlayVolumeView extends React.Component {
    constructor() {
        super();
        this.state = {
            volume: 0.5
        };
    }

    componentDidMount() {
        const volumeProgress = document.querySelector('.volume-progress');
        volumeProgress.addEventListener('change', this.updateVolume);
    }

    componentWillUnmount() {
        const volumeProgress = document.querySelector('.volume-progress');
        volumeProgress.removeEventListener('change', this.updateVolume);
    }

    updateVolume = (event) => {
        const currentVolume = event.target.valueAsNumber;

        this.setState({volume: currentVolume}, () => {
            WebStorage.setSessionStorage(WebStorageKeys.PLAY_VOLUME, this.state.volume);
        });

        this.props.AudioActionsCreator.updateVolume();
    };

    render() {
        return (
            <PlayVolume>
                <Icon
                    type="sound"
                    style={{
                        fontSize: 25,
                        color: '#FFFFFF',
                        margin: '0 10px'
                    }}
                />
                <input
                    className="volume-progress"
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    defaultValue={this.state.volume}
                />
            </PlayVolume>
        );

    }
}

PlayVolumeView.propTypes = {
    AudioActionsCreator: PropTypes.object.isRequired
};

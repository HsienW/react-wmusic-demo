import React from 'react';
import PropTypes from 'prop-types';
import is from 'is_js';
import {Button} from 'antd';
import * as WebStorageKeys from '../../../WebStorage/WebStorageKeys';
import WebStorage from '../../../WebStorage/WebStorage';

export default class PlayBarToolItem extends React.Component {
    handleClick = () => {
        const track = WebStorage.getSessionStorage(WebStorageKeys.TRACK_URL);

        if (is.not.existy(track)) {
            return;
        }

        this.handlePlay();
    };

    handlePlay = () => {
        switch (this.props.itemIcon) {
            case 'step-backward':
                this.props.AudioActionsCreator.audioPrev();
                break;

            case 'caret-right':
                this.props.AudioActionsCreator.audioPlay();
                break;

            case 'pause':
                this.props.AudioActionsCreator.audioStop();
                break;

            case 'step-forward':
                this.props.AudioActionsCreator.audioNext();
                break;
        }
    };

    render() {
        return (
            <Button
                shape="circle"
                size="large"
                ghost={true}
                icon={this.props.itemIcon}
                onClick={this.handleClick}
            />
        );
    }
}

PlayBarToolItem.propTypes = {
    itemIcon: PropTypes.string.isRequired,
    AudioActionsCreator: PropTypes.object.isRequired
};

import React from 'react';
import styled from 'styled-components';
import AudioContainer from '../../Audio/Containers/AudioContainer';
import PlayBarToolContainer from '../../PlayBarTool/Containers/PlayBarToolContainer';
import PlaySongContainer from '../../PlaySong/Containers/PlaySongContainer';
import PlayProgressContainer from '../../PlayProgress/Containers/PlayProgressContainer';
import PlayVolumeContainer from '../../PlayVolume/Containers/PlayVolumeContainer';
import PlayListContentContainer from '../../PlayListContent/Containers/PlayListContentContainer';
import * as StyleCenter from '../../../StyleCenter/StyleCenter';

const Playbar = styled.div` 
    width: 100%;
    height: ${StyleCenter.playBarHeight};
    background-color: ${StyleCenter.mainColor};
    position: fixed;
    bottom: 0;
`;

const PlayBarView = () => {
    return (
        <Playbar>
            <PlayListContentContainer />
            <PlayBarToolContainer />
            <PlayProgressContainer />
            <PlayVolumeContainer />
            <PlaySongContainer />
            <AudioContainer />
        </Playbar>
    );
};

export default PlayBarView;

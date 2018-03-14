import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PlayBarToolItem from '../../PlayBarTool/Views/PlayBarToolItem';

const PlaybarTool = styled.div`
    width: 10%;
    min-width: 200px;
    margin: 22px auto 16px auto;
    display: flex;
    justify-content: space-around;
`;

export default class PlayBarToolView extends React.Component {
    render() {
        return (
            <PlaybarTool>
                <PlayBarToolItem
                    itemIcon={'step-backward'}
                    AudioActionsCreator={this.props.AudioActionsCreator}
                />
                <PlayBarToolItem
                    itemIcon={'caret-right'}
                    AudioActionsCreator={this.props.AudioActionsCreator}
                />
                <PlayBarToolItem
                    itemIcon={'pause'}
                    AudioActionsCreator={this.props.AudioActionsCreator}
                />
                <PlayBarToolItem
                    itemIcon={'step-forward'}
                    AudioActionsCreator={this.props.AudioActionsCreator}
                />
            </PlaybarTool>
        );
    }
}

PlayBarToolView.propTypes = {
    AudioActionsCreator: PropTypes.object.isRequired
};

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NewReleaseItem from './NewReleaseItem';
import NewReleaseRespond from '../../../ApiCenter/Browse/Respond/NewReleaseRespond';
import * as StyleCenter from '../../../StyleCenter/StyleCenter';

const NewRelease = styled.div`
    width: calc(100% - ${StyleCenter.leftMenuWidth});
    height: 89%;
    padding: 2% 4%;
    float: right;
    overflow-y: auto;
    ${StyleCenter.scrollBar}
`;

export default class NewReleaseView extends React.Component {
    componentWillMount() {
        this.props.NewReleaseActionsCreator.getNewRelease();
    }

    render() {
        return (
            <NewRelease>
                {
                    NewReleaseRespond.newReleaseItems.map((itemObj) => {
                        return (
                            <NewReleaseItem
                                key={itemObj.id}
                                itemId={itemObj.id}
                                itemName={itemObj.name}
                                imageURL={itemObj.images[0].url}
                                artistName={itemObj.artists[0].name}
                                PortalActionsCreator={
                                    this.props.PortalActionsCreator
                                }
                                AlbumPlayListActionsCreator={
                                    this.props.AlbumPlayListActionsCreator
                                }
                            />
                        );
                    })
                }
            </NewRelease>
        );

    }
}

NewReleaseView.propTypes = {
    actionType: PropTypes.string.isRequired,
    NewReleaseActionsCreator: PropTypes.object.isRequired,
    PortalActionsCreator: PropTypes.object.isRequired,
    AlbumPlayListActionsCreator: PropTypes.object.isRequired
};

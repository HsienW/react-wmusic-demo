import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GenresContentItem from './GenresContentItem';
import GenresContentRespond from '../../../ApiCenter/Browse/Respond/GenresContentRespond';
import * as StyleCenter from '../../../StyleCenter/StyleCenter';

const GenresContent = styled.div`
    width: calc(100% - ${StyleCenter.leftMenuWidth});
    height: 89%;
    padding: 2% 4%;
    float: right;
    overflow-y: auto;
    ${StyleCenter.scrollBar}
`;

export default class GenresContentView extends React.Component {
    render() {
        return (
            <GenresContent>
                {
                    GenresContentRespond.genresContentItems.map((itemObj) => {
                        return (
                            <GenresContentItem
                                key={itemObj.id}
                                itemId={itemObj.id}
                                itemName={itemObj.name}
                                itemTotal={itemObj.tracks.total}
                                imageURL={itemObj.images[0].url}
                                PortalActionsCreator={
                                    this.props.PortalActionsCreator
                                }
                                PlayListActionsCreator={
                                    this.props.PlayListActionsCreator
                                }
                            />
                        );
                    })
                }
            </GenresContent>
        );

    }
}

GenresContentView.propTypes = {
    GenresActionsCreator: PropTypes.object.isRequired,
    PortalActionsCreator: PropTypes.object.isRequired,
    PlayListActionsCreator: PropTypes.object.isRequired
};

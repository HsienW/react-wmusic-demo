import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FeaturedItem from './FeaturedItem';
import FeaturedRespond from '../../../ApiCenter/Browse/Respond/FeaturedRespond';
import * as StyleCenter from '../../../StyleCenter/StyleCenter';

const Featured = styled.div`
    width: calc(100% - ${StyleCenter.leftMenuWidth});
    height: 89%;
    padding: 2% 4%;
    float: right;
    overflow-y: auto;
    ${StyleCenter.scrollBar}
`;

export default class FeaturedView extends React.Component {
    componentWillMount() {
        this.props.FeaturedActionsCreator.getFeatured();
    }

    render() {
        return (
            <Featured>
                {
                    FeaturedRespond.featuredItems.map((itemObj) => {
                        return (
                            <FeaturedItem
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
            </Featured>
        );

    }
}

FeaturedView.propTypes = {
    FeaturedActionsCreator: PropTypes.object.isRequired,
    PortalActionsCreator: PropTypes.object.isRequired,
    PlayListActionsCreator: PropTypes.object.isRequired
};

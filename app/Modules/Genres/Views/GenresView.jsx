import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GenresItem from './GenresItem';
import GenresRespond from '../../../ApiCenter/Browse/Respond/GenresRespond';
import * as StyleCenter from '../../../StyleCenter/StyleCenter';

const Genres = styled.div`
    width: calc(100% - ${StyleCenter.leftMenuWidth});
    height: 89%;
    padding: 2% 4%;
    float: right;
    overflow-y: auto;
    ${StyleCenter.scrollBar}
`;

export default class GenresView extends React.Component {
    componentWillMount() {
        this.props.GenresActionsCreator.getGenres();
    }

    render() {
        return (
            <Genres>
                {
                    GenresRespond.genresItems.map((itemObj) => {
                        return (
                            <GenresItem
                                key={itemObj.id}
                                itemId={itemObj.id}
                                itemName={itemObj.name}
                                imageURL={itemObj.icons[0].url}
                                PortalActionsCreator={
                                    this.props.PortalActionsCreator
                                }
                                GenresActionsCreator={
                                    this.props.GenresActionsCreator
                                }
                            />
                        );
                    })
                }
            </Genres>
        );

    }
}

GenresView.propTypes = {
    GenresActionsCreator: PropTypes.object.isRequired,
    PortalActionsCreator: PropTypes.object.isRequired
};

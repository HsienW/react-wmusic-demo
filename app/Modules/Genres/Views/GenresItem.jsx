import React from 'react';
import PropTypes from 'prop-types';
import {Card} from 'antd';

const {Meta} = Card;

export default class GenresItem extends React.Component {
    handleClick = () => {
        this.props.GenresActionsCreator.getGenresList(this.props.itemId);
        this.props.GenresActionsCreator.forceUpdateGenres();
        this.props.PortalActionsCreator.goToPage('genreslist');
    };

    render() {
        return (
            <Card
                hoverable
                onClick={this.handleClick}
                cover={<img src={this.props.imageURL} />}
                style={{
                    width: 190,
                    height: 250,
                    margin: '6px 20px',
                    float: 'left'
                }}
            >
                <Meta
                    title={this.props.itemName}
                />
            </Card>
        );

    }
}

GenresItem.propTypes = {
    itemId: PropTypes.string.isRequired,
    itemName: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    GenresActionsCreator: PropTypes.object.isRequired,
    PortalActionsCreator: PropTypes.object.isRequired
};

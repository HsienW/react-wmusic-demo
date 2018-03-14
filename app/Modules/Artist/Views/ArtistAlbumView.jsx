import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ArtistAlbumItem from './ArtistAlbumItem';
import AlbumRespond from '../../../ApiCenter/Album/Respond/AlbumRespond';

const ArtistAlbum = styled.div`
    width: 100%;
    height: 50%;
    padding: 1% 0 1% 1%;
`;

export default class ArtistAlbumView extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <ArtistAlbum>
                {
                    AlbumRespond.albumsItems.map((Obj) => {
                        return (
                            <ArtistAlbumItem
                                key={Obj.id}
                                itemId={Obj.id}
                                itemName={Obj.name}
                                artistName={Obj.artists[0].name}
                                imageURL={Obj.images[1].url}
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
            </ArtistAlbum>
        );

    }
}

ArtistAlbumView.propTypes = {
    PortalActionsCreator: PropTypes.object.isRequired,
    AlbumPlayListActionsCreator: PropTypes.object.isRequired
};

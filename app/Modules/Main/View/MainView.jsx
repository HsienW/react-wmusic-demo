import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AuthView from '../../Auth/Views/AuthView';
import ArtistContainer from '../../Artist/Containers/ArtistContainer';
import AlbumPlayListContainer from '../../Album/Containers/AlbumPlayListContainer';
import ErrorView from '../../Error/Views/ErrorView';
import FeaturedContainer from '../../Featured/Containers/FeaturedContainer';
import GenresContainer from '../../Genres/Containers/GenresContainer';
import GenresContentContainer from '../../Genres/Containers/GenresContentContainer';
import NewReleaseContainer from '../../NewRelease/Containers/NewReleaseContainer';
import PlayListContainer from '../../PlayList/Containers/PlayListContainer';
import PlayBarContainer from '../../PlayBar/Containers/PlayBarContainer';
import LeftMenuContainer from '../../LeftMenu/Containers/LeftMenuContainer';
import SearchContentContainer from '../../SearchContent/Containers/SearchContentContainer';
import WebStorage from '../../../WebStorage/WebStorage';
import * as WebStorageKeys from '../../../WebStorage/WebStorageKeys';
import 'antd/dist/antd.css';

const MainContent = styled.div`
    width:100%;
    height: 100%;
`;

const Main = ({match}) => {
    switch (match.params.urlPath) {
        case 'signin':
            return (
                <AuthView />
            );

        case 'featured':
            return (
                <MainContent>
                    <LeftMenuContainer />
                    <FeaturedContainer />
                    <PlayBarContainer />
                </MainContent>
            );

        case 'genres':
            return (
                <MainContent>
                    <LeftMenuContainer />
                    <GenresContainer />
                    <PlayBarContainer />
                </MainContent>
            );

        case 'genreslist':
            return (
                <MainContent>
                    <LeftMenuContainer />
                    <GenresContentContainer />
                    <PlayBarContainer />
                </MainContent>
            );

        case 'newrelease':
            return (
                <MainContent>
                    <LeftMenuContainer />
                    <NewReleaseContainer />
                    <PlayBarContainer />
                </MainContent>
            );

        case 'album':
            return (
                <MainContent>
                    <LeftMenuContainer />
                    <AlbumPlayListContainer />
                    <PlayBarContainer />
                </MainContent>
            );

        case 'artist':
            return (
                <MainContent>
                    <LeftMenuContainer />
                    <ArtistContainer />
                    <PlayBarContainer />
                </MainContent>
            );

        case 'playlist':
            return (
                <MainContent>
                    <LeftMenuContainer />
                    <PlayListContainer />
                    <PlayBarContainer />
                </MainContent>
            );

        case 'search':
            return (
                <MainContent>
                    <LeftMenuContainer />
                    <SearchContentContainer />
                    <PlayBarContainer />
                </MainContent>
            );

        case 'error':
            return (
                <MainContent>
                    <ErrorView />
                </MainContent>
            );

        default:
            WebStorage.setSessionStorage(WebStorageKeys.PORTAL_URL, '');
            return null;
    }
};

Main.propTypes = {
    match: PropTypes.object.isRequired,
};

export default Main;

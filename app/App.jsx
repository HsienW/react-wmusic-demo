import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import ReduxStore from './ReduxStore';
import PortalContainer from './Modules/Portal/Containers/PortalContainer';
import {HashRouter, Router, Switch, Route} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import AuthView from './Modules/Auth/Views/AuthView';
import ArtistContainer from './Modules/Artist/Containers/ArtistContainer';
import AlbumPlayListContainer from './Modules/Album/Containers/AlbumPlayListContainer';
import ErrorView from './Modules/Error/Views/ErrorView';
import FeaturedContainer from './Modules/Featured/Containers/FeaturedContainer';
import GenresContainer from './Modules/Genres/Containers/GenresContainer';
import GenresContentContainer from './Modules/Genres/Containers/GenresContentContainer';
import NewReleaseContainer from './Modules/NewRelease/Containers/NewReleaseContainer';
import PlayListContainer from './Modules/PlayList/Containers/PlayListContainer';
import PlayBarContainer from './Modules/PlayBar/Containers/PlayBarContainer';
import LeftMenuContainer from './Modules/LeftMenu/Containers/LeftMenuContainer';
import SearchContentContainer from './Modules/SearchContent/Containers/SearchContentContainer';

const MainContent = styled.div`
    width:100%;
    height: 100%;
`;

const history = createHistory();

const Main = (event) => {
    switch (event.match.path) {
        case '/signin':
            return (
                <AuthView />
            );

        case '/featured':
            return (
                <MainContent>
                    <LeftMenuContainer />
                    <FeaturedContainer />
                    <PlayBarContainer />
                </MainContent>
            );

        case '/genres':
            return (
                <MainContent>
                    <LeftMenuContainer />
                    <GenresContainer />
                    <PlayBarContainer />
                </MainContent>
            );

        case '/genreslist':
            return (
                <MainContent>
                    <LeftMenuContainer />
                    <GenresContentContainer />
                    <PlayBarContainer />
                </MainContent>
            );

        case '/newrelease':
            return (
                <MainContent>
                    <LeftMenuContainer />
                    <NewReleaseContainer />
                    <PlayBarContainer />
                </MainContent>
            );

        case '/album':
            return (
                <MainContent>
                    <LeftMenuContainer />
                    <AlbumPlayListContainer />
                    <PlayBarContainer />
                </MainContent>
            );

        case '/artist':
            return (
                <MainContent>
                    <LeftMenuContainer />
                    <ArtistContainer />
                    <PlayBarContainer />
                </MainContent>
            );

        case '/playlist':
            return (
                <MainContent>
                    <LeftMenuContainer />
                    <PlayListContainer />
                    <PlayBarContainer />
                </MainContent>
            );

        case '/search':
            return (
                <MainContent>
                    <LeftMenuContainer />
                    <SearchContentContainer />
                    <PlayBarContainer />
                </MainContent>
            );

        case '/error':
            return (
                <MainContent>
                    <ErrorView />
                </MainContent>
            );

        default:
            return (
                <MainContent>
                    <ErrorView />
                </MainContent>
            );
    }
};

render((
    <Provider store={ReduxStore}>
        <HashRouter>
            <Router history={history}>
                <div style={{width: '100%', height: '100%'}}>
                    <Route component={PortalContainer}/>
                    <Switch>
                        <Route path="/signin" component={Main}/>
                        <Route path="/playlist" component={Main}/>
                        <Route path="/featured" component={Main}/>
                        <Route path="/genres" component={Main}/>
                        <Route path="/genreslist" component={Main}/>
                        <Route path="/newrelease" component={Main}/>
                        <Route path="/album" component={Main}/>
                        <Route path="/artist" component={Main}/>
                        <Route path="/search" component={Main}/>
                        <Route path="/error" component={Main}/>
                    </Switch>
                </div>
            </Router>
        </HashRouter>
    </Provider>
), document.getElementById('app'));
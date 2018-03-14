import {combineReducers} from 'redux';
import AudioReducer from '../../Audio/Reducer/AudioReducer';
import ArtistReducer from '../../Artist/Reducer/ArtistReducer';
import AlbumPlayListReducer from '../../Album/Reducer/AlbumPlayListReducer';
import FeaturedReducer from '../../Featured/Reducer/FeaturedReducer';
import GenresReducer from '../../Genres/Reducer/GenresReducer';
import PortalReducer from '../../Portal/Reducer/PortalReducer';
import PlayListReducer from '../../PlayList/Reducer/PlayListReducer';
import PlayListContentReducer from '../../PlayListContent/Reducer/PlayListContentReducer';
import PlayBarToolReducer from '../../PlayBarTool/Reducer/PlayBarToolReducer';
import PlaySongReducer from '../../PlaySong/Reducer/PlaySongReducer';
import PlayProgressReducer from '../../PlayProgress/Reducer/PlayProgressReducer';
import NewReleaseReducer from '../../NewRelease/Reducer/NewReleaseReducer';
import SearchBarReducer from '../../SearchBar/Reducer/SearchBarReducer';
import SearchContentReducer from '../../SearchContent/Reducer/SearchContentReducer';
import SearchTracksReducer from '../../SearchTracks/Reducer/SearchTracksReducer';
import SearchArtistsReducer from '../../SearchArtists/Reducer/SearchArtistsReducer';
import SearchAlbumsReducer from '../../SearchAlbums/Reducer/SearchAlbumsReducer';

const MainReducer = combineReducers({
    AudioReducer,
    ArtistReducer,
    AlbumPlayListReducer,
    FeaturedReducer,
    GenresReducer,
    NewReleaseReducer,
    PortalReducer,
    PlayListReducer,
    PlayListContentReducer,
    PlayBarToolReducer,
    PlaySongReducer,
    PlayProgressReducer,
    SearchBarReducer,
    SearchContentReducer,
    SearchTracksReducer,
    SearchArtistsReducer,
    SearchAlbumsReducer
});

export default MainReducer;

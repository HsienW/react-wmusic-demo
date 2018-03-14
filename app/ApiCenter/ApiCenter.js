import SpotifyWebApi from 'spotify-web-api-js';
import WebStorage from '../WebStorage/WebStorage';
import * as WebStorageKeys from '../WebStorage/WebStorageKeys';

const spotify = new SpotifyWebApi();

export default class ApiCenter {
    static getAccessToken() {
        return spotify.setAccessToken(WebStorage.getSessionStorage(WebStorageKeys.TOKEN));
    }
}

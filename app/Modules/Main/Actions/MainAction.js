import * as AudioActions from '../../Audio/Actions/AudioActions';
import * as PortalActions from '../../Portal/Actions/PortalActions';
import * as SearchBarActions from '../../SearchBar/Actions/SearchBarActions';

export default class MainAction {
    static getAudio() {
        return AudioActions;
    }

    static getPortal() {
        return PortalActions;
    }

    static getSearchBar() {
        return SearchBarActions;
    }
}

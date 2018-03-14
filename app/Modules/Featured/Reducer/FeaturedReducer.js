import FeaturedRespond from '../../../ApiCenter/Browse/Respond/FeaturedRespond';
import * as FeaturedActions from '../Actions/FeaturedActions';

const FeaturedReducer = (state = {actionType: ''}, action) => {
    switch (action.type) {
        case FeaturedActions.GET_FEATURED_SUCCESS:
            FeaturedRespond.featuredItems.length = 0;
            FeaturedRespond.featuredItems = action.payload.playlists.items;
            return {actionType: action.type};

        case FeaturedActions.FORCE_UPDATE_FEATURED:
            return {actionType: action.type};

        default:
            return state;
    }
};

export default FeaturedReducer;

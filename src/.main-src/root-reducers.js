/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { LOCATION_CHANGE } from 'react-router-redux';

import { configReducer } from './state/config/reducer';
import { userReducer } from './state/user/reducer';

// Initial routing state
const routeInitialState = {
    location: null
};
/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
    switch (action) {
        case LOCATION_CHANGE:
            return action.payload;
        default:
            return state;
    }
}
/**
 * Creates the main reducer;
 */
export const rootReducer = combineReducers({
    route: routeReducer,
    user: userReducer,
    config: configReducer
});

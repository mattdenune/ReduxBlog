import { FETCH_POSTS } from '../actions';
import _ from 'lodash';

export default function(state={}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            // converts our array of objects into an object of objects
            // that uses the id as a key for each entry
            return _.mapKeys(action.payload.data, 'id');
        default: 
            return state;
    }
}
import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST } from '../actions';

export default function(state={}, action) {
    switch (action.type) {
        case FETCH_POST: 
        // OLD WAY
        // const post = action.payload.data;
        // const newState =  {...state };
        // newState[post.id] = post;
        // return newState;

        // NEW WAY
        return {...state, [action.payload.data.id]: action.payload.data};
        case FETCH_POSTS:
            // converts our array of objects into an object of objects
            // that uses the id as a key for each entry
            return _.mapKeys(action.payload.data, 'id');
        default: 
            return state;
    }
}
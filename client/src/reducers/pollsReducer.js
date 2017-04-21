import { 
  FETCH_POLLS
} from '../actions/types';

const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action){
    switch(action.type){
        case FETCH_POLLS:
            return [...state, action.payload]
        default:
            return state;
    }
}
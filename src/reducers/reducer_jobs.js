import { FETCH_JOBS } from '../actions/index';

export default function(state = [], action){

	// Set up a switch statement to handle only the
	// fetchJob action type
	switch (action.type) {
		case FETCH_JOBS:
			// console.log([action.payload.data, ...state])
			return [ action.payload.data, ...state];
	}

	return state;
}
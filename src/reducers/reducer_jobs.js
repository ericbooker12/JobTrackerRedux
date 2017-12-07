import _ from 'lodash';
import { FETCH_JOBS } from '../actions/index';

export default function(state = {}, action){
	// Set up a switch statement to handle only the
	// fetchJob action type
	switch(action.type) {
		case FETCH_JOBS:
			return _.mapKeys(action.payload.data, 'id');
	}

	return state;
}
import _ from 'lodash';
import { FETCH_JOBS, FETCH_JOB, DELETE_POST } from '../actions/index';

export default function(state = {}, action){
	// Set up a switch statement to handle only the
	// fetchJob action type
	switch(action.type) {
		case DELETE_POST:
			return _.omit(state, action.payload);

		case FETCH_JOB:

			return { ...state, [action.payload.data.id]: action.payload.data }

		case FETCH_JOBS:
			return _.mapKeys(action.payload.data, 'id');
	}

	return state;
}
import _ from 'lodash';
import { FETCH_JOBS, FETCH_JOB } from '../actions/index';

export default function(state = {}, action){
	// Set up a switch statement to handle only the
	// fetchJob action type
	switch(action.type) {
		case FETCH_JOB:
			// const post = action.payload.data;
			// const newState = { ...state };
			// newState[post.id] = post;
			// return newState;

			return { ...state, [action.payload.data.id]: action.payload.data }

		case FETCH_JOBS:
			// const formatedJobData = _.mapKeys(action.payload.data, 'id');
			// console.log('formatted_job_data', formatedJobData[6])
			return _.mapKeys(action.payload.data, 'id');
			// return _.mapKeys(action.payload.data, 'id');
	}

	return state;
}
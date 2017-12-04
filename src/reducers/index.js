import { combineReducers } from 'redux';
import JobReducer from './reducer_jobs';

const rootReducer = combineReducers({
	jobData: JobReducer
});

export default rootReducer;

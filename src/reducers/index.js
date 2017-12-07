import { combineReducers } from 'redux';
import JobsReducer from './reducer_jobs';

const rootReducer = combineReducers({
	jobData: JobsReducer
});

export default rootReducer;

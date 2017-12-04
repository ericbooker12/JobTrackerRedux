import { combineReducers } from 'redux';
import JobReducer from './reducer_jobs';

const rootReducer = combineReducers({
	job: JobReducer
});

export default rootReducer;

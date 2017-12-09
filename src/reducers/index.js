import { combineReducers } from 'redux';
import {reducer as formReducer } from 'redux-form';
import JobsReducer from './reducer_jobs';

const rootReducer = combineReducers({
	jobData: JobsReducer,
	form: formReducer
});

export default rootReducer;

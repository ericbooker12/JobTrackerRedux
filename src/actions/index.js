import axios from 'axios'

export const FETCH_JOBS = 'fetch_jobs';
export const CREATE_JOBS = 'create_jobs';
export const FETCH_JOB = 'fetch_job';

const jobsURL = 'http://localhost:3000/jobs'

export function fetchJobs(){
	const request = axios.get(jobsURL);

	return {
		type: FETCH_JOBS,
		payload: request
	};
}

export function createJob(values, callback) {
	const request = axios.post(jobsURL, values)
		.then(() => callback());

	return {
		type: CREATE_JOBS,
		payload: request
	}
};

export function fetchJob(id){
	const request = axios.get(`http://localhost:3000/jobs/${id}`)
	// console.log(request)

	return {
		type: FETCH_JOB,
		payload: request
	}
};
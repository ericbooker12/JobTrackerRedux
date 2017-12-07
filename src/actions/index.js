import axios from 'axios'

export const FETCH_JOBS = 'FETCH_JOBS'
const jobsURL = 'http://localhost:3000/jobs'

export function fetchJobs(){
	const request = axios.get(jobsURL)

	return {
		type: FETCH_JOBS,
		payload: request
	};
}


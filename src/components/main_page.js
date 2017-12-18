import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJobs, deleteJob } from '../actions';
import { Link } from 'react-router-dom';
import JobShow from './job_show';
import JobDetail from './job_detail';
import JobsIndex from './jobs_index';
import HelperFunctions from './helper_functions';

class MainPage extends Component {

	render() {
		return (
			<div className='site'>
				<JobsIndex />
				<JobDetail />
			</div>
		)
	}
}


export default MainPage;






import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJobs } from '../actions';



class JobsIndex extends Component {

	render() {
		return (
			<div className='col-md-6 list-group job-list'>
				JobsIndex
			</div>
		)
	}
}


export default connect(null, { fetchJobs: fetchJobs })(JobsIndex);






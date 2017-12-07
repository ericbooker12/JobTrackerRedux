import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import JobDetail from './job_detail';
import { fetchJobs } from '../actions';

class JobList extends Component {

	componentDidMount(){
		this.props.fetchJobs()
	}

	renderJobs(){
		let selectedJob = '';


		return this.props.jobs.map(function(job){
			let date = new Date(job.date_applied);
			return (
				<tr key={job.id} className='table-row job-list-item' >
					<td>{job.id}</td>
					<td>{job.title}</td>
					<td>{job.company}</td>
					<td>{date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()}</td>
					<td>{job.notes.length}</td>
				</tr>
			)
		})
	};

	render() {
		console.log(this.props.jobs)
		return (
			<div className='col-md-6 list-group job-list'>
				<table className='table table-hover'>
					<thead>
						<tr className='table-row'>
							<th className="row-header"></th>
							<th className="row-header">Job Title</th>
							<th className="row-header">Company</th>
							<th className="row-header">Date Applied</th>
							<th className="row-header">No. of notes</th>
						</tr>
					</thead>
					<tbody>
						{this.renderJobs()}
					</tbody>
				</table>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {jobs: state.jobData }
}


export default connect(mapStateToProps, { fetchJobs: fetchJobs })(JobList);





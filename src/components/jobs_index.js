import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJobs } from '../actions';
import { Link } from 'react-router-dom';
import { JobShow } from './job_show';



class JobsIndex extends Component {
	componentDidMount(){
		this.props.fetchJobs();
	}

	renderJobs(){

		return _.map(this.props.jobs, job => {
			let date = new Date(job.date_applied);
			return (
				<tr key={job.id} className='table-row job-list-item'>
					<td>{job.id}</td>
					<td>
						<Link to={`/jobs/${job.id}`}>{job.title}</Link>
					</td>
					<td>{job.company}</td>
					<td>{date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()}</td>
					<td>{job.notes.length}</td>
				</tr>
			)
		});
	};

	render() {
		console.log(this.props.jobs)
		return (
			<div className='col-md-8'>
			<h3>Jobs</h3>
			<div className='list-group job-list'>
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
					<tbody >

						{this.renderJobs()}
					</tbody>
				</table>
			</div>
			<div className='text-xs-right'>
				<Link className='btn btn-primary' to='/jobs/new'>
						New Job
				</Link>
			</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {jobs: state.jobData }
}

export default connect(mapStateToProps, { fetchJobs: fetchJobs })(JobsIndex);






import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJobs, deleteJob } from '../actions';
import { Link } from 'react-router-dom';
import { JobShow } from './job_show';
import HelperFunctions from './helper_functions';

class Notes extends Component {
	constructor(props){
		super(props)

	}

	componentDidMount(){
		this.props.fetchJobs();
	}

	onDeleteClick(event){
		const id = event.target.id;
		this.props.deleteJob(id, () => {});
	}

	renderJobs(){
		let helper = new HelperFunctions();

		return _.map(this.props.jobs, job => {
			return (
				<tr key={job.id} className='table-row job-list-item'>
					<td className="table-data">{job.id}</td>
					<td className="table-data">
						<Link to={`/jobs/${job.id}`}>{job.title}</Link>
					</td>
					<td className="table-data">{job.company}</td>
					<td className="table-data">{helper.formatDateWithMonth(job.date_applied)}</td>
					<td className="table-data">
						{job.cover_letter_sent ? 'yes' : 'no'}
					</td>
					<td className="table-data">
						{job.resume_sent ? 'yes' : 'no'}
					</td>
					<td className="table-data">
						<button
							className='btn-sm btn-danger'
							id={job.id}
							onClick={this.onDeleteClick.bind(this)}
						>X
						</button>
					</td>

				</tr>
			)
		});

	};

	render() {

			return (
				<div className='col-md-12'>
					<div>
						<h3>Jobs</h3>
						<div className='list-group job-list'>
							<table className='table table-hover xtable-stripedx job-table'>
								<thead>
									<tr className='table-row job-list-item'>
										<th className="row-header"></th>
										<th className="row-header">Job Title</th>
										<th className="row-header">Company</th>
										<th className="row-header">Date Applied</th>
										<th className="row-header">Cover Letter?</th>
										<th className="row-header">Resume?</th>
										<th className="row-header"></th>
									</tr>
								</thead>
								<tbody >
									{this.renderJobs()}
								</tbody>
							</table>
						</div>
						<div className='text-xs-right'>
							<Link className='btn job-btn' to='/jobs/new'>
									New Job
							</Link>
						</div>
					</div>
				</div>
			)
		}
}

function mapStateToProps(state) {
	return {jobs: state.jobData }
}

export default connect(mapStateToProps, { fetchJobs, deleteJob })(Notes);






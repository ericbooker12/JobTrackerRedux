import React, { Component } from 'react';
import { connect } from 'react-redux';

class JobList extends Component {
	constructor(props){
		super(props)

		console.log('In JobList Constructor', props)

	}
	renderJob(job){

		let date = new Date(job.date_applied);

		return (
			<tr key={job.id} className='table-row'>
				<td>{job.id}</td>
				<td>{job.title}</td>
				<td>{job.company}</td>
				<td>{date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()}</td>
			</tr>
		)
	}
;
	render() {
		return (
			<table className='table table-hover'>
				<thead>
					<tr className='table-row'>
						<th></th>
						<th>Job Title</th>
						<th>Company</th>
						<th>Date Applied</th>
					</tr>
				</thead>
				<tbody>
					{this.props.jobs.map(this.renderJob)}
				</tbody>
			</table>
		)
	}
}

function mapStateToProps(state) {
	return {jobs: state.jobData }
}

export default connect(mapStateToProps)(JobList);





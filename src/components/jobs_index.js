import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJobs, deleteJob } from '../actions';
import { Link } from 'react-router-dom';
import JobShow from './job_show';
import JobDetail from './job_detail';
import HelperFunctions from './helper_functions';

class JobsIndex extends Component {
	constructor(props){
		super(props)

		this.state = {
			selectedJob: null
		}

	}

	componentWillMount(){
		this.props.fetchJobs();
		// console.log("State", this.state)
	}

	componentDidMount(){
		console.log(this.props);
		if (!this.props){
			const { id } = this.props.match.params;
			this.props.fetchJob(id)

		}
	}

	onDeleteClick(event){
		const id = event.target.id;
		this.props.deleteJob(id, () => {});
	}

	selectJob(event){
		const id = event.currentTarget.id
		const job = this.props.jobs[id]

		this.setState({
			selectedJob: job
		})

		console.log("State", this.state)
	}

	renderJobs(){
		let helper = new HelperFunctions();
		let i = 1;
		console.log(this.props.jobs)
		return _.map(this.props.jobs, job => {

			return (
				<li
					key={job.id}
					className='job-list-item card'
					id={job.id}
					onClick={this.selectJob.bind(this)}
					>
					{/*<div className="table-data">{i++}</div>*/}
					<div className="job-title">
						Title: <Link to={`/jobs/${job.id}`}> {job.title}</Link>
					</div>
					<div className="company" id={job.id}>Company: {job.company}</div>
					<div className="date-applied">Date Applied: {helper.formatDateWithMonth(job.date_applied)}</div>
					<div className="cover-letter-sent">
						Cover Letter Sent: {job.cover_letter_sent ? 'Yes' : 'No'}
					</div>
					<div className="resume-sent">
						Resume Sent: {job.resume_sent ? 'Yes' : 'No'}
					</div>
					<div className="buttons">
						<button
							className='delete-job-btn job-btn'
							id={job.id}
							onClick={this.onDeleteClick.bind(this)}
						>Delete Job
						</button>
					</div>

				</li>
			)
		});

	};

	render() {

			return (
				<div className='site'>
					<div className='jobs-index'>
						<ul
							className='cards'
							>
							{this.renderJobs()}
						</ul>
					</div>

						<JobDetail job={this.state.selectedJob}/>

				</div>

			)
		}
}

function mapStateToProps(state) {
	return {jobs: state.jobData }
}

export default connect(mapStateToProps, { fetchJobs, deleteJob })(JobsIndex);






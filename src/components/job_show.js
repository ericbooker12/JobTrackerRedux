import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJob, deleteJob } from '../actions'
import { Link } from 'react-router-dom';
import HelperFunctions from './helper_functions';

class JobShow extends Component {

	constructor(props){
		super(props)
		this.onDeleteClick = this.onDeleteClick.bind(this);
	}

	componentDidMount(){
		if (!this.props){
			const { id } = this.props.match.params;
			this.props.fetchJob(id)

		}
	}

	onDeleteClick(){
		const { id } = this.props.match.params;
		this.props.deleteJob(id, () => {
			this.props.history.push('/');
		});
	}

	render(){
		let helper = new HelperFunctions();
		const { job } = this.props;

		if (!job) {
			return <div>Loading...</div>
		}

		return (
			<div>
				<Link to='/' className='btn btn-primary'>Back to Jobs List</Link>
				<button
					className='btn btn-danger pull-xs-right'
					onClick={this.onDeleteClick}
				>
					Delete Job
				</button>
				<div className="col-md-4 well job-info">
					<h2>{job.title}</h2>
					<h3>{job.company}</h3>
					<p>You applied for this job on <strong>{job.date_applied}</strong></p>
					<p>
						{job.cover_letter_sent ? 'A cover letter was submitted' : 'You did not submit a cover letter'}
					</p>
				</div>

				<div className="col-md-7 note-content text-box">
				<h3 id="notes-title"><strong>Job Notes:</strong></h3>

					{job.notes.map((note, i) => {
						return(
							<div key={note.id} className='note thin'>
								<p className='note-date'>On
									<strong>
										{helper.formatDateWithMonth(note.created_at)}
									</strong>
									you wrote: </p>
								<p>{note.content}</p>
								<hr id='end-of-note'/>
							</div>
						)
					})}
				</div>
			</div>

		)
	}
}

function mapStateToProps({ jobData }, ownProps) {
	return {job: jobData[ownProps.match.params.id]}
}

export default connect(mapStateToProps, { fetchJob, deleteJob })(JobShow);




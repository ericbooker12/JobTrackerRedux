import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJob } from '../actions'
import { Link } from 'react-router-dom';

class JobShow extends Component {

	componentDidMount(){
		if (!this.props){
			const { id } = this.props.match.params;
			this.props.fetchJob(id)
		}
	}

	onDeleteClick(){
		this.props.deleteJob();
	}

	formatDate(d){
		const months= {
			0: 'January',
			1: 'February',
			2: 'March',
			3: 'April',
			4: 'May',
			5: 'June',
			6: 'July',
			7: 'August',
			8: 'September',
			9: 'October',
			10: 'November',
			11: 'December'
		}
		const date = new Date(d);
		return ` ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} `;
	}

	render(){
		const { job } = this.props;

		if (!job) {
			return <div>Loading...</div>
		}

		return (
			<div>
				<Link to='/'>Back to Index</Link>
				<button
					className='btn btn-danger pull-xs-right'
					onClick={this.onDeleteClick.bind(this)}
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
							// var date = new Date(note.updated_at)

							// this.formatDate(date)


						return(
							<div key={note.id} className='note thin'>
								<p className='note-date'>On
									<strong>
										{this.formatDate(note.created_at)}
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

export default connect(mapStateToProps, { fetchJob })(JobShow);




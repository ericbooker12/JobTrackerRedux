import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchJobs } from '../actions/index'

class JobList extends Component {
	constructor(props){
		super(props);

		const jobData = fetchJobs();

		console.log(jobData.payload)

	}

	fetchJobs(){
		// We need to go fetch job data
		this.props.fetchJobs()
	}

	render() {
		return (
			<div>
				This is a list of jobs
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchJobs}, dispatch)
}

export default connect(null, mapDispatchToProps)(JobList)
















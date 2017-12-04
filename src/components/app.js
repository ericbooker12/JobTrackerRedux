import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
// import Jobs from '../containers/jobs'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchJobs } from '../actions/index'
import JobList from '../containers/job_list'

class App extends Component {
	constructor(props){
		super(props)
		this.getJobs = this.getJobs.bind(this);

		const jobData = this.getJobs();

		this.state = {jobData: jobData}


	}

	getJobs(){
		return this.props.fetchJobs();
	};

	render() {
		return (
			<div>
				<SearchBar />
				<JobList />
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchJobs }, dispatch)
}

// The first argument is state. Since we don't carre about state here,
// we are passing in null
// The second argument is mapDispatchToProps
export default connect(null, mapDispatchToProps)(App)





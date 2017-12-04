import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchJobs } from '../actions/index'


class Jobs extends Component {
	constructor(props){
		super(props);

		const jobData = fetchJobs();

	}

	fetchJobs(){
		return this.props.fetchJobs();
	};

	render() {
		return (
			<div>
				Jobs
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchJobs }, dispatch)
}

// The first argument is state. Since we don't carre about state here,
// we are passing in null
// The second argument is mapDispatchToProps
export default connect(null, mapDispatchToProps)(Jobs)
















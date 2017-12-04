import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchJobs } from '../actions/index'

class Jobs extends Component {
	constructor(props){
		super(props);

		const jobData = this.props.fetchJobs();

	}

	// fetchJobs(){
	// 	// We need to go fetch job data
	// 	this.props.fetchJobs()
	// }

	render() {
		return (
			// <table className='table table-hover'>
			// 	<thead>
			// 		<tr>
			// 			<th>Job</th>
			// 			<th>Title</th>
			// 			<th>Company</th>
			// 		</tr>
			// 	</thead>
			// </table>
			<div>Jobs</div>
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
















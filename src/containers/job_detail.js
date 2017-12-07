import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class JobDetail extends Component {
	constructor(props){
		super(props)

		console.log('props from job_detail', this.props)


	}

	componentDidMount(){

		console.log('Props from detail:', this.props)
	}

	render(){
		return (
			<div className='job-detail col-md-6'>

			</div>
		)
	}
}

function mapStateToProps(state) {
	return {jobs: state.jobData }
}

// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({ fetchJobs }, dispatch)
// }

export default connect(mapStateToProps)(JobDetail);





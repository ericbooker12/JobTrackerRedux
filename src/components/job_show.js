import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJob } from '../actions'

class JobShow extends Component {

	componentDidMount(){
		const { id } = this.props.match.params;
		this.props.fetchJob(id)
	}

	render(){
		const { job } = this.props;

		if (!job) {
			return <div>Loading...</div>
		}

		return (
			<div>
				<h3>Show</h3>
				<h6></h6>
				<p></p>
			</div>
		);
	}
}

function mapStateToProps({ jobData }, ownProps) {
	return {job: jobData[ownProps.match.params.id]}
}

export default connect(mapStateToProps, { fetchJob })(JobShow);




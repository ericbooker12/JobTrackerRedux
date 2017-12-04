import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import Jobs from '../containers/jobs'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchJobs } from '../actions/index'

export default class App extends Component {
	render() {
		return (
			<div>
				<SearchBar />
				<Jobs />
			</div>
		);
	}
}

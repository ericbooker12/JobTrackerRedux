import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJobs, deleteJob } from '../actions';
import { Link } from 'react-router-dom';
import { JobShow } from './job_show';

class HelperFunctions {
	constructor(data){
		// console.log(data + ' from HelperFunctions')
		this.stuff = data;

	}

	formatDate(date){
		date instanceof Object ? date = date : date = new Date(date);
		return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
	}

	formatDateWithMonth(){

	}


}

export default HelperFunctions;







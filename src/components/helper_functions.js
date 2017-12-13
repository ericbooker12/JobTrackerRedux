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

	formatDateWithMonth(date){
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

		date instanceof Object ? date = date : date = new Date(date);

		return ` ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} `;

	}


}

export default HelperFunctions;







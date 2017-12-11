import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createJob } from '../actions';

class JobsNew extends Component {

	renderField(field) {
		const { meta } = field;
		const className = `form-group ${meta.touched && meta.error ? 'has-danger' : ''}`
		return (
			<div className={className}>
				<label>{field.label}</label>
				<input
					className='form-control'
					type={field.type}
					{...field.input}
				/>
				<div className='text-help'>
					{meta.touched ? meta.error : ''}
				</div>
			</div>
		)
	}

	onSubmit(values){
		this.props.createJob(values, () => {
			// go back to root route
			this.props.history.push('/');
		});

	}

	render() {
		// handleSubmit comes from redux-form
		const { handleSubmit } = this.props;

		return(
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<Field
					label='Company:'
					name='company'
					type='text'
					component={this.renderField}
				/>
				<Field
					label='URL:'
					name='url'
					type='text'
					component={this.renderField}
				/>
				<Field
					label='Job Title:'
					name='title'
					type='text'
					component={this.renderField}
				/>
				<Field
					label='Date Applied:'
					name='date_applied'
					type='date'
					component={this.renderField}
				/>
				<Field
					label='Resume Sent:'
					name='resume-sent'
					type='checkbox'
					component={this.renderField}
				/>
				<Field
					label='Cover letter sent:'
					name='cover-letter-sent'
					type='checkbox'
					component={this.renderField}
				/>
				<Field
					label='Not Offered:'
					name='not-offered'
					type='date'
					component={this.renderField}
				/>
				<button type='submit' className='btn btn-primary'>Submit</button>
				<Link to='/' className='btn btn-primary'>Cancel</Link>
			</form>
		);
	}
}

function validate(values) {
	const errors = {};

	// Validate the inputs from 'values'
	if (!values.company) {
		errors.company = "Enter a company name"
	}

	if (!values.url) {
		errors.url = "Enter a URL for this job listing"
	}

	if (!values.title) {
		errors.title = "Enter a job title"
	}

	if (!values.date_applied) {
		errors.date_applied = "Enter a date"
	}

	// If errors is empty then the form is fine to submit
	// If errors has any properties then redux form assumes form is invalid
	return errors;
};

export default reduxForm({
	validate: validate,
	form: 'JobsNewForm'
})(
	connect(null, { createJob }) (JobsNew)
);










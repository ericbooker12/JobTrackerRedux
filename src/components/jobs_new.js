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
					type='text'
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
					label='Title For Job:'
					name='title'
					component={this.renderField}
				/>
				<Field
					label='Categories:'
					name='categories'
					component={this.renderField}
				/>
				<Field
					label='Content:'
					name='content'
					component={this.renderField}
				/>
				<button type='submit' className='btn btn-primary'>Submit</button>
				<Link to='/' className='btn btn-danger'>Cancel</Link>
			</form>
		);
	}
}

function validate(values) {
	const errors = {};

	// Validate the inputs from 'values'
	if (!values.title) {
		errors.title = "Enter a title"
	}

	if (!values.categories) {
		errors.categories = "Enter some categories"
	}

	if (!values.content) {
		errors.content = "Enter some content"
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










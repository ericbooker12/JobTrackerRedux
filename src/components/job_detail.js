import React from 'react';

const JobDetail = (props) => {
	let job = null;
	let notes = null;
	let dateApplied = Date.now();

	// if(!props.job) {
	// 	return <div>...Loading</div>
	// } else {
	// 		notes = props.job.notes;
	// 		job = props.job;
	// 		dateApplied = new Date(props.job.date_applied)
	// }

	function coverLetter(job){
		if(job.cover_letter_sent){
			return 'You submitted a cover letter.'
		} else {
			return 'You did not submit a cover letter.'
		}
	}

	function resume(job){
		if(job.cover_letter_sent){
			return 'You submitted a resume.'
		} else {
			return 'You did not submit a resume.'
		}
	}

	function upper(str){
		var wordsUpper = [];

		str.split(' ').map(function(word){
			wordsUpper.push(upperFirst(word))
		});

			function upperFirst(word){
				var wordArr = word.split('');
				wordArr[0] = wordArr[0].toUpperCase();
				return wordArr.join('');
			}

		return wordsUpper.join(' ');
	};

	console.log(dateApplied)

	return(
		<div className='job-detail' >
			<p>Job Title: <strong>Job</strong></p>
			<p>Company: <strong>Company</strong></p>
			<p>
				You applied for this job on
				<strong> Date</strong>
			</p>
			<p>Cover Letter</p>
			<p>Resume</p>

			<div className='note-content'>

				<h3 id="notes-title"><strong>Job Notes:</strong></h3>

			</div>
		</div>
	)
};

export default JobDetail;
import React from 'react';
import { useState } from 'react';

import { Button, Form } from 'react-bootstrap';

const CommentArea = ({ asin, selected }) => {
	// state = {
	// 	comment: '',
	// 	rate: '',
	// 	elementId: '',
	// };
	const [comments, setcomments] = useState({
		comment: '',
		rate: '',
		elementId: '',
	});

	const handleInput = (e, propertyName) => {
		// this function needs two things: the event coming from the input and
		// which property of this.state.reservation we should update

		// if we're coming from the smoking checkbox, we should not use
		// e.target.value, but instead e.target.checked (it will be true/false)

		setcomments({
			...comments,
			elementId: asin,
			// copying over name, phone, numberOfPeople, smoking etc.
			[propertyName]: e.target.value, // for every field but the smoking
		});
	};

	const handleSubmit = async (e) => {
		// with async/await
		e.preventDefault();
		console.log(comments);

		try {
			// the place for every operation that might fail outside of your control

			let response = await fetch(
				'https://striveschool-api.herokuapp.com/api/comments',
				{
					method: 'POST',
					body: JSON.stringify(comments),
					headers: {
						'Content-type': 'application/json',
						Authorization:
							'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZWMwMTJkNTI2MjAwMTViNmRjOGYiLCJpYXQiOjE2Mjk5ODA5MjUsImV4cCI6MTYzMTE5MDUyNX0.x3ZHRxwwEpeJf-XJjcmPgGTjmmRx-9uh8czR1CoLxNs',
					},
				},
			);

			if (response.ok) {
				// reservation saved!
				alert('your comment has been  saved correctly!');

				// this is for resetting the form to its initial state
				setcomments({
					comment: '',
					rate: '',
					elementId: '',
				});
			} else {
				alert('your comment was NOT saved correctly!');
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		selected && (
			<div>
				<Form onSubmit={handleSubmit}>
					<Form.Group>
						<Form.Label>comment?</Form.Label>
						<Form.Control
							type='text'
							placeholder='comment'
							value={comments.comment}
							onChange={(e) => handleInput(e, 'comment')}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>rating?</Form.Label>
						<Form.Control
							type='text'
							placeholder='rating'
							value={comments.rate}
							onChange={(e) => handleInput(e, 'rate')}
						/>
					</Form.Group>
					<Button variant='primary' type='submit'>
						Add Comment
					</Button>
				</Form>
			</div>
		)
	);
};

export default CommentArea;

// we'll need the state here!
// the plan is to bind our JSX with the state (map over it)
// at that point we just need to FILL the state

import { useEffect } from 'react';
import { Component, useState } from 'react';
import { Container } from 'react-bootstrap';
const DisplayComents = ({ asin }) => {
	// 'this' is always an object
	// 'this' is filled with properties and methods belonging to the current INSTANCE of the class

	// 1) create an empty state, make room for our reservations that we're going to grab from the api
	// 2) create some JSX that maps over our state, generating all the time a list out of it
	// 3) we have now to FILL that state with our reservations

	// 1)
	// state = {
	// 	// initial value?
	// 	comments: [],
	// };
	const [comments, setcomments] = useState([]);
	const fetchData = async () => {
		console.log(comments);
		if (asin) {
			try {
				let response = await fetch(
					'https://striveschool-api.herokuapp.com/api/comments/' + asin,
					{
						headers: {
							Authorization:
								'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZWMwMTJkNTI2MjAwMTViNmRjOGYiLCJpYXQiOjE2Mjk5ODA5MjUsImV4cCI6MTYzMTE5MDUyNX0.x3ZHRxwwEpeJf-XJjcmPgGTjmmRx-9uh8czR1CoLxNs',
						},
					},
				);
				// console.log(response)

				if (response.ok) {
					let comments = await response.json();
					console.log(comments);
					// console.log(reservations)
					setcomments(comments);
				} else {
					console.log('something went wrong with the server');
				}
			} catch (error) {
				console.log(error);
			}
		}
	};

	// 3)
	useEffect(() => {
		fetchData();
	}, []);
	// componentDidMount = async () => {
	// 	console.log("I'm componentDidMount");
	// 	console.log(this.props.bookSelected);
	// 	// here things happen AFTER the initial render
	// 	// this is the PERFECT PLACE for a get request
	// 	// because the user is already watching your "static" part of the jsx
	// 	// now we're going to perform here the fetch (a get request)
	// 	// it's somewhat like window.onload()

	// 	// componentDidMount will always happen JUST ONCE!!!
	// 	this.fetchData();
	// };
	// componentDidUpdate = async (previousProps, previousState) => {
	// 	if (this.props.asin !== previousProps.asin) {
	// 		this.fetchData();
	// 	}
	// };
	useEffect(() => {
		fetchData();
	}, [asin]);

	// the render method fires AGAIN every time there's a change in the STATE
	// or in the PROPS of the component
	console.log(asin);
	console.log(comments);

	// ? : this is the ternary operator
	// && this is the short-circuit operator
	return comments.map((el) => {
		return (
			<p key={el._id}>
				{el.comment} {el.rate}
			</p>
		);
	});
};

export default DisplayComents;

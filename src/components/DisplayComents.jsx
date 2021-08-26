// we'll need the state here!
// the plan is to bind our JSX with the state (map over it)
// at that point we just need to FILL the state

import { Component } from 'react';

class DisplayComents extends Component {
	// 'this' is always an object
	// 'this' is filled with properties and methods belonging to the current INSTANCE of the class

	// 1) create an empty state, make room for our reservations that we're going to grab from the api
	// 2) create some JSX that maps over our state, generating all the time a list out of it
	// 3) we have now to FILL that state with our reservations

	// 1)
	state = {
		// initial value?
		comments: [],
	};

	clickHandler = (e) => {
		// does not create its own scope!
		// so it inherits the outside one
		// and this is why we get 'this' to be used
		// console.log(this.setState)
		console.log(e);
		this.setState({
			comments: [],
		});
	};

	// 3)
	componentDidMount = async () => {
		console.log("I'm componentDidMount");
		// here things happen AFTER the initial render
		// this is the PERFECT PLACE for a get request
		// because the user is already watching your "static" part of the jsx
		// now we're going to perform here the fetch (a get request)
		// it's somewhat like window.onload()

		// componentDidMount will always happen JUST ONCE!!!
		if (this.props.asin) {
			try {
				let response = await fetch(
					'https://striveschool-api.herokuapp.com/api/comments/' +
						this.props.asin,
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
					this.setState({
						comments: comments,
					});
				} else {
					console.log('something went wrong with the server');
				}
			} catch (error) {
				console.log(error);
			}
		}
	};

	render() {
		// the render method fires AGAIN every time there's a change in the STATE
		// or in the PROPS of the component
		console.log(this.props.asin);
		// ? : this is the ternary operator
		// && this is the short-circuit operator
		return this.state.comments.map((el) => {
			console.log(el.comments);
		});
	}
}

export default DisplayComents;

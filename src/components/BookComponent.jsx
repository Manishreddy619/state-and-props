import React from 'react';
import Books from '../components/data.json';
import SingleBook from './SingleBook';
const BookComponent = () => {
	console.log(Books);
	return (
		<div>
			<SingleBook myObj={Books} />
		</div>
	);
};

export default BookComponent;

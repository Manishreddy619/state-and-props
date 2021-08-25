import React from 'react';
import { Button } from 'react-bootstrap';
const MyBadge = ({ color, number, text }) => {
	return (
		<div className='mt-3'>
			<Button variant={color}>{text}</Button>
		</div>
	);
};

export default MyBadge;

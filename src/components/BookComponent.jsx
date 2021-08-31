import React, { Component } from 'react';
import Books from '../components/data.json';
import SingleBook from './SingleBook';
import { Form, Row, Button, Col, Container } from 'react-bootstrap';
import './BookComponent.css';
import { useState } from 'react';
const BookComponent = ({ item }) => {
	// state = {
	// 	searchQuery: '',
	// };
	const [searchQuery, setsearchQuery] = useState('');

	console.log(searchQuery);
	console.log(item);
	return (
		<div>
			<Row className='mt-4'>
				<Col>
					<Form.Group className='mb-3 mt-3' controlId='formBasicEmail'>
						<Form.Label>Search</Form.Label>
						<Form.Control
							type='text'
							placeholder='Enter book name'
							value={searchQuery}
							onChange={(e) => setsearchQuery(e.target.value)}
						/>
					</Form.Group>
				</Col>
			</Row>
			<Container>
				<Row>
					{item
						.filter((b) => {
							return b.title.toLowerCase().includes(searchQuery);
						})
						.map((el) => {
							return (
								<Col
									sm={6}
									lg={4}
									md={5}
									className='mt-3'
									id='main'
									style={{ marginBottom: '3rem' }}
									key={el.asin}>
									<SingleBook item={el} />
								</Col>
							);
						})}
				</Row>
			</Container>
		</div>
	);
};

export default BookComponent;

import React, { Component } from 'react';
import Books from '../components/data.json';
import SingleBook from './SingleBook';
import { Form, Row, Button, Col, Container } from 'react-bootstrap';
import './BookComponent.css';
class BookComponent extends Component {
	state = {
		searchQuery: '',
	};

	render() {
		console.log(this.state.searchQuery);
		console.log(this.props.item);
		return (
			<div>
				<Row className='mt-4'>
					<Col>
						<Form.Group className='mb-3 mt-3' controlId='formBasicEmail'>
							<Form.Label>Search</Form.Label>
							<Form.Control
								type='text'
								placeholder='Enter book name'
								value={this.state.searchQuery}
								onChange={(e) => this.setState({ searchQuery: e.target.value })}
							/>
						</Form.Group>
					</Col>
				</Row>
				<Container>
					<Row>
						{this.props.item
							.filter((b) => {
								return b.title.toLowerCase().includes(this.state.searchQuery);
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
	}
}

export default BookComponent;

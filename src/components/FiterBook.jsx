import React, { Component } from 'react';
import { Form, Row, Button, Col } from 'react-bootstrap';
class FiterBook extends Component {
	state = {
		input: '',
	};
	handleInput = (e, propNamee) => {
		e.preventDefault();
		this.setState({
			[propNamee]: e.target.value,
		});

		console.log(e.target.value);
	};
	render() {
		return (
			<div>
				<Form onSubmit={this.handleInput}>
					<Row>
						<Col md={6}>
							<Form.Group>
								<Form.Label htmlFor='name'>Search Here</Form.Label>
								<Form.Control
									type='text'
									name='name'
									id='name'
									placeholder='Book Name'
									value={this.state.input}
									onChange={(e) => {
										this.handleInput(e, 'input');
									}}
								/>
							</Form.Group>
							<Button variant='primary' type='submit'>
								Search Book
							</Button>
						</Col>
					</Row>
				</Form>
			</div>
		);
	}
}

export default FiterBook;

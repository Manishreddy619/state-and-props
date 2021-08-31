import React from 'react';
import './SingleBook.css';
import { Col, Container, Row, Button, Card } from 'react-bootstrap';
import { Component } from 'react';
import CommentArea from './CommentArea';

import DisplayComents from './DisplayComents';
import { useState } from 'react';

const SingleBook = ({ item }) => {
	// state = {
	// 	selected: false,
	// };
	const [selected, setselected] = useState(false);

	// console.log(this.props.item);
	return (
		<Container>
			<Row className='mb-4'>
				<Col id='main' key={item.asin}>
					{/* <Card
							onClick={() => this.setState({ selected: true })}
							style={{
								backgroundColor: this.state.selected ? 'orange' : '',
								zIndex: this.state.selected ? '999' : '',
							}}>
							<Card.Img variant='top' src={this.props.item.img} />
							<Card.Body>
								<Card.Title>{this.props.item.title}</Card.Title>
								<Card.Text>{this.props.item.category}</Card.Text>
							</Card.Body>
						</Card>
						{this.state.selected ? (
							<CommentArea asin={this.props.item.asin} />
						) : (
							''
						)}
						{this.state.selected ? (
							<DisplayComents asin={this.props.item.asin} />
						) : (
							''
						)} */}
					{selected ? <CommentArea asin={item.asin} selected={selected} /> : ''}
					<div
						className='card text-truncate'
						onClick={() => setselected(!selected)}
						style={{
							backgroundColor: selected ? 'gray' : '',
							zIndex: selected ? '999' : '',
						}}>
						<img className='image cover mt-3' src={item.img} />
						<div className='book-info'>
							<div className='title'>Title: {item.title}</div>
							<div className='byline'>Category: {item.category}</div>
						</div>
						{selected ? <DisplayComents asin={item.asin} /> : ''}
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default SingleBook;

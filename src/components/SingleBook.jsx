import React from 'react';
import './SingleBook.css';
import { Col, Container, Row, Button, Card } from 'react-bootstrap';
import { Component } from 'react';
import CommentArea from './CommentArea';

import DisplayComents from './DisplayComents';

class SingleBook extends Component {
	state = {
		selected: false,
	};

	render() {
		// console.log(this.props.item);
		return (
			<Container>
				<Row className='mb-4'>
					<Col id='main' key={this.props.item.asin}>
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
						{this.state.selected ? (
							<CommentArea
								asin={this.props.item.asin}
								selected={this.state.selected}
							/>
						) : (
							''
						)}
						<div
							className='card text-truncate'
							onClick={() => this.setState({ selected: !this.state.selected })}
							style={{
								backgroundColor: this.state.selected ? 'gray' : '',
								zIndex: this.state.selected ? '999' : '',
							}}>
							<img className='image cover mt-3' src={this.props.item.img} />
							<div className='book-info'>
								<div className='title'>Title: {this.props.item.title}</div>
								<div className='byline'>
									Category: {this.props.item.category}
								</div>
							</div>
							{this.state.selected ? (
								<DisplayComents asin={this.props.item.asin} />
							) : (
								''
							)}
						</div>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default SingleBook;

import React from 'react';
import './SingleBook.css';
import { Col, Container, Row, Button } from 'react-bootstrap';
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
				<Row className='mt-3 mb-3'>
					<Col
						id='main'
						style={{ marginBottom: '6rem', marginTop: '3rem' }}
						key={this.props.item.asin}>
						<div
							className='card text-truncate'
							onClick={() => this.setState({ selected: true })}
							style={{
								backgroundColor: this.state.selected ? 'orange' : '',
								zIndex: this.state.selected ? '999' : '',
							}}>
							{this.state.selected ? (
								<CommentArea asin={this.props.item.asin} />
							) : (
								''
							)}

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

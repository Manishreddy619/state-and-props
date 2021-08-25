import React from 'react';
import './SingleBook.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Component } from 'react';
class SingleBook extends Component {
	render() {
		return (
			<Container>
				<Row>
					<Col
						className='mt-3'
						id='main'
						style={{ marginBottom: '3rem' }}
						key={this.props.item.asin}>
						<div className='card text-truncate'>
							<img className='image cover' src={this.props.item.img} />
							<div className='book-info'>
								<div className='title'>Title: {this.props.item.title}</div>
								<div className='byline'>
									Category: {this.props.item.category}
								</div>
								<div className='rating'>
									<span className='stars'></span>
									<span className='votes'>{this.props.item.price} $</span>
								</div>
							</div>
							<div className='likes'>
								<span className='image-container'>
									<img
										className='image person'
										src='https://images.pexels.com/photos/157661/young-woman-shooting-model-157661.jpeg?h=350&amp;auto=compress&amp;cs=tinysrgb'
									/>
								</span>
								<span className='people'>
									<span className='name'>Isabella Elliott</span>
									&nbsp;likes this
								</span>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default SingleBook;

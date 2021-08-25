import React from 'react';
import './SingleBook.css';
import { Col, Container, Row } from 'react-bootstrap';
const SingleBook = ({ myObj }) => {
	console.log(myObj);
	return (
		<Container>
			<h2>HistoryBooks</h2>
			<Row>
				{myObj.map((book) => {
					return (
						<Col
							xs={12}
							sm={6}
							md={4}
							lg={3}
							className='mt-3'
							id='main'
							style={{ marginBottom: '3rem' }}
							key={myObj.asin}>
							<div className='card text-truncate'>
								<img className='image cover' src={book.img} />
								<div className='book-info'>
									<div className='title'>Title: {book.title}</div>
									<div className='byline'>Category: {book.category}</div>
									<div className='rating'>
										<span className='stars'></span>
										<span className='votes'>{book.price} $</span>
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
					);
				})}
			</Row>
		</Container>
	);
};

export default SingleBook;

import './App.css';
import MyBadge from './components/MyBadge';
import WarningSign from './components/WarningSign';
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleBook from './components/SingleBook';

import BookComponent from './components/BookComponent';
import FiterBook from './components/FiterBook';

function App() {
	const book = [
		{
			img: 'https://images-eu.ssl-images-amazon.com/images/I/51Gw57YKuFL._SX198_BO1,204,203,200_QL40_ML2_.jpg',
			price: '23.99',
			title: 'Mamba Mentality',
			category: 'Insipiration',
			asin: '834709',
		},
	];
	return (
		<div className='App'>
			<WarningSign text='Danger here' />
			<FiterBook />
			<MyBadge color='primary' text='Give me Some sunshine' />
			<SingleBook myObj={book} />
			<BookComponent />
		</div>
	);
}

export default App;

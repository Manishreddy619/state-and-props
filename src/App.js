import './App.css';
import MyBadge from './components/MyBadge';
import WarningSign from './components/WarningSign';
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleBook from './components/SingleBook';
import Book from '../src/components/data.json';
import BookComponent from './components/BookComponent';
import FiterBook from './components/FiterBook';

function App() {
	return (
		<div className='App'>
			<WarningSign text='Danger here' />

			<MyBadge color='primary' text='Give me Some sunshine' />
			<SingleBook item={Book[0]} />
			<BookComponent item={Book} />
		</div>
	);
}

export default App;

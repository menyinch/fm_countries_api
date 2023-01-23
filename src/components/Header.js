import { Link } from 'react-router-dom';
import { Toggle } from './';

export const Header = () => {
	return (
		<nav className='header'>
			<Link to='/'>
				<h1 className='siteTitle'>Where in the world?</h1>
			</Link>
			<Toggle />
		</nav>
	);
};

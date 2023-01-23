import { Link } from 'react-router-dom';
import { Toggle } from './';

export const Header = () => {
	return (
		<nav>
			<Link to='/'>
				<h1>Where in the world?</h1>
			</Link>
			<div>
				<Toggle />
			</div>
		</nav>
	);
};

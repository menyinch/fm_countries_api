import { Link } from 'react-router-dom';

export const BackButton = ({ path }) => {
	return (
		<div className='back'>
			<Link to={path ?? '/'} className='back-link'>
				<span>&larr;</span> Back
			</Link>
		</div>
	);
};

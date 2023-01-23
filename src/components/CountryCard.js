import { Link } from 'react-router-dom';

export const CountryCard = ({ name, population, region, capital, flags, alpha3Code }) => (
	<Link
		to={`/${alpha3Code.toLowerCase().replace(/\s/g, '%20')}`}
		key={name}
		className='inside-container'
	>
		<div className='image-container'>
			<img className='image' src={flags.png} alt='' />
		</div>
		<div className='info-block'>
			<h2 className='info-block-h2'>{name}</h2>
			<div>
				<p>
					<span className='category'>Population:</span> {population.toLocaleString()}
				</p>
				<p>
					<span className='category'>Region:</span> {region}
				</p>
				<p>
					<span className='category'>Capital:</span> {capital}
				</p>
			</div>
		</div>
	</Link>
);

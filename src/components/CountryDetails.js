import { useCallback, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import { BackButton } from './';

export const CountryDetails = () => {
	const [country, setCountry] = useState({});
	const [borderGroup, setCountryBorders] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const { code } = useParams();

	const fetchCountryData = useCallback(async () => {
		const url = `https://restcountries.com/v2/alpha/${code}`;
		const response = await fetch(url);
		const data = await response.json();
		setCountry(data);
		setCountryBorders(data.borders);
		setIsLoading(false);
	}, [code]);

	useEffect(() => {
		fetchCountryData();
	}, [fetchCountryData]);

	if (isLoading) {
		return (
			<div className='searching-block'>
				<h2 className='searching-h1'>Searching...</h2>
			</div>
		);
	}

	return (
		<>
			<BackButton path='/' />
			<div className='country-block'>
				<div className='country-image-container'>
					<img className='country-image' src={country.flags.png} alt={country.name} />
				</div>
				<div className='country-block-info'>
					<h2>{country.name}</h2>
					<div className='details-block'>
						<div className='details-block-one'>
							<p>
								<span className='details-span'>Native Name:</span> {country.nativeName}
							</p>
							<p>
								<span className='details-span'>Population:</span>{' '}
								{country.population.toLocaleString()}
							</p>
							<p>
								<span className='details-span'>Region:</span> {country.region}
							</p>
							<p>
								<span className='details-span'>Sub Region:</span> {country.subregion}
							</p>
							<p>
								<span className='details-span'>Capital:</span> {country.capital}
							</p>
						</div>
						<div className='details-block-two'>
							<p>
								<span className='details-span'>Top Level Domain:</span> {country.topLevelDomain}
							</p>
							<p>
								<span className='details-span'>Currencies:</span> {country.currencies[0].name}
							</p>
							<p>
								<span className='details-span'>Languages:</span> {country.languages[0].name}
							</p>
						</div>
					</div>
					<div className='border-countries'>
						<p className='border-countries-title'>Border Countries:</p>
						{borderGroup?.length ? (
							borderGroup.map((code) => (
								<Link key={code} className='border-country' to={`/${code}`}>
									{code}
								</Link>
							))
						) : (
							<Link to='/' className='border-country-none'>
								No Borders...
							</Link>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

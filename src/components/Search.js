import { useState, useEffect, useCallback } from 'react';
import { FaSearch } from 'react-icons/fa';

const regions = [
	{ label: 'All', name: 'all' },
	{ label: 'Africa', name: 'africa' },
	{ label: 'Americas', name: 'americas' },
	{ label: 'Asia', name: 'asia' },
	{ label: 'Europe', name: 'europe' },
	{ label: 'Oceania', name: 'oceania' },
];

const API_URL = 'https://restcountries.com/v2/';

export const Search = ({ searchCountries, searchInput, setCountries }) => {
	const [region, setRegion] = useState({ label: 'All', name: 'all' });

	const fetchRegion = useCallback(
		async ({ name }) => {
			if (name) {
				const url = `${API_URL}${name === 'all' ? 'all' : `region/${name}`}`;
				const response = await fetch(url);
				const data = await response.json();
				setCountries(data);
			}
		},
		[setCountries]
	);

	useEffect(() => {
		fetchRegion(region);
	}, [region, fetchRegion]);

	const handleClick = (e) => {
		const selectedRegion = regions.find((region) => region.name === e.target.value);
		setRegion(selectedRegion);
	};

	return (
		<div className='search-section'>
			<div className='input-block'>
				<FaSearch className='search-icon' />
				<input
					type='search'
					name='search'
					id='search'
					placeholder='Search for a country...'
					value={searchInput}
					onChange={({ target }) => searchCountries(target.value)}
				/>
			</div>
			<details className='select-region' id='regions'>
				<summary>Filter by Region</summary>
				<div className='region-list'>
					{regions.map((region) => (
						<option key={region.name} onClick={handleClick} value={region.name}>
							{region.label}
						</option>
					))}
				</div>
			</details>
		</div>
	);
};

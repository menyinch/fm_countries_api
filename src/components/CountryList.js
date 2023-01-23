import { useState, useEffect, useCallback } from 'react';

import { CountryCard, Search } from './';

const API_URL = `https://restcountries.com/v2/all`;

export const CountryList = () => {
	const [countries, setCountries] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [filtered, setFiltered] = useState([]);
	const [searchInput, setSearchInput] = useState('');

	const fetchCountries = useCallback(async () => {
		try {
			const response = await fetch(API_URL);
			const data = await response.json();
			setCountries(data);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	}, []);

	useEffect(() => {
		fetchCountries();
	}, [fetchCountries]);

	const searchCountries = (searchValue) => {
		setSearchInput(searchValue);

		if (searchInput.trim()) {
			const filteredCountries = countries.filter((country) =>
				Object.values(country).join('').toLowerCase().includes(searchValue.toLowerCase())
			);
			setFiltered(filteredCountries);
		} else {
			setFiltered(countries);
		}
	};

	if (isLoading) {
		return (
			<div className='searching-block'>
				<h2 className='searching-h1'>Searching...</h2>
			</div>
		);
	}

	return (
		<>
			<div>
				<Search
					searchCountries={searchCountries}
					searchInput={searchInput}
					setCountries={setCountries}
				/>
			</div>
			{searchInput.length > 0 ? (
				<div className='container-block'>
					{filtered.map((filteredCountry) => (
						<CountryCard key={filteredCountry.alpha3Code} {...filteredCountry} />
					))}
				</div>
			) : (
				<div className='container-block'>
					{countries.map((country) => (
						<CountryCard key={country.alpha3Code} {...country} />
					))}
				</div>
			)}
		</>
	);
};

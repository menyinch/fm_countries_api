import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Componnets
import { CountryDetails, CountryList, Error404, Header } from './components';

//Styles
import './styles/index.css';

const app = document.getElementById('root');
const root = createRoot(app);
root.render(
	<React.StrictMode>
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<div className='mainContainer'>
				<Header />
				<Routes>
					<Route exact path='/:code' element={<CountryDetails />} />
					<Route path='*' element={<Error404 />} />
					<Route path='/' exact element={<CountryList />} />
				</Routes>
			</div>
		</BrowserRouter>
	</React.StrictMode>
);

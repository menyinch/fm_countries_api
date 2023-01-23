import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Header } from './components';
//Styles
import './styles/index.css';

const app = document.getElementById('root');
const root = createRoot(app);
root.render(
	<React.StrictMode>
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<div className='mainContainer'>
				<Header />
			</div>
		</BrowserRouter>
	</React.StrictMode>
);

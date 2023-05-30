import React from 'react';
import './index.scss';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage/AboutPage';
import MainPage from './pages/MainPage/MainPage';
import { Link } from 'react-router-dom';

const App = () => {
	return (
		<div className='app'>
			<Link to={'/'}>Main</Link>
			<Link to={'/about'}>About site</Link>
			<Routes>
				<Route path={'/about'} element={<AboutPage/>}/>
				<Route path={'/'} element={<MainPage/>}/>
			</Routes>
		</div>
	);
};

export default App;

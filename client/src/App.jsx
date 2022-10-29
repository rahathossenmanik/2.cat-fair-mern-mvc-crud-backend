import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Authors from './pages/authors';
import Books from './pages/books';
import NavBar from './nav/NavBar';
import { Container } from 'reactstrap';

const App = () => {
	return (
		<Container>
			<NavBar />
			<Router>
				<Routes>
					<Route path='/' component={Home} />
					<Route path='/authors' component={Authors} />
					<Route path='/books' component={Books} />
				</Routes>
			</Router>
		</Container>
	);
};

export default App;

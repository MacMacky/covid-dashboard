import React from 'react';
import Main from './pages/Main'
import Country from './pages/Country'
import World from './pages/World/index';
import Navbar from './components/Navbar';
import { ThemeProvider } from '@material-ui/core'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'


function App(props: any) {
	return (
		<ThemeProvider theme={props.theme}>
			<Router>
				<Navbar />
				<Switch>
					<Route component={Main} path="/" exact />
					<Route component={Country} path="/world/:country" />
					<Route component={World} path="/world" />
					<Redirect to="/" />
				</Switch>
			</Router>
		</ThemeProvider>
	);
}



export default App;

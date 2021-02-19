import './styles/App.css';
import "react-image-gallery/styles/css/image-gallery.css";
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TPais from './components/TPais';
import Space from './components/Space';
import ContactUs from './components/ContactUs';
import About from './components/About';
import Admin from './components/Admin';
import Footer from './components/Footer';
import React from 'react';
import { MuiThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#2d3940',
			contrastText: '#fff'
		}
	}
});

const useStyles = makeStyles(() => ({
    root: {
		boxShadow: '0 8px 6px -6px #ccc',
		borderRadius: 5,
		padding: 15
    },
	pageNotFound: {
		width: '100vh',
		textAlign: 'center',
		color: 'IndianRed'
	}
}));

export default function App() {
	const classes = useStyles();

	return (
		<MuiThemeProvider theme={theme}>
			<Router>
				<NavBar />
				<div className="App-header">
					<div className={classes.root}>
						<Switch>
							<Route path="/" exact render={ () => <TPais /> } />
							<Route path="/space" exact render={ () => <Space /> } />
							<Route path="/about" exact render={ () => <About /> } />
							<Route path="/contactus" exact render={ () => <ContactUs /> } />
							<Route path="/admin" exact render={ () => <Admin /> } />
							<Route render={ () => <div className={classes.pageNotFound}><h2>لم يتم العثور على المحتوى المطلوب</h2></div> } />
						</Switch>
					</div>
				</div>
				<Footer />
			</Router>
		</MuiThemeProvider>
	);
}
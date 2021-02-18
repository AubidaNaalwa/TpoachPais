import './styles/App.css';
import "react-image-gallery/styles/css/image-gallery.css";
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TPais from './components/TPais';
import Space from './components/Space';
import ContactUs from './components/ContactUs';
import About from './components/About';
import Admin from './components/Admin';
import React from 'react';
import TGallery from "./components/TGallery";
import TImages from "./components/TImages";
import Courses from './components/Courses';
import CourseInfo from './components/courseInfo'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#2d3940'
		}
	}
});

export default function App() {
	const [course, setCourse] = React.useState(null)

	return (
		<MuiThemeProvider theme={theme}>
			<Router>
				<NavBar />
				<div className="App-header">
					<Switch>
						<Route path="/" exact render={ () => <TPais /> } />
						<Route path="/space" exact render={ () => <Space /> } />
						<Route path="/about" exact render={ () => <About /> } />
						<Route path="/contactus" exact render={ () => <ContactUs /> } />
						<Route path="/admin" exact render={ () => <Admin /> } />
						<Route path="/tpais/courses" exact render={ () => <Courses setCourse={setCourse}/> }/>
						<Route path="/tpais/courses/courseinfo" exact render={ () => <CourseInfo cInfo={course}/> }/>
						<Route path="/tpais/gallery" exact render={ () => <TGallery /> }/>
						<Route path='/tpais/gallery/:id' exact render={ ({match}) => <TImages match={match} /> } />

						<Route render={ () => <h2 style={{ color: "IndianRed " }}>لم يتم العثور على المحتوى المطلوب</h2> } />
					</Switch>
				</div>
			</Router>
		</MuiThemeProvider>
	);
}
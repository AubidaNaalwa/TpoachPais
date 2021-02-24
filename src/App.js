import './styles/App.css';
import './styles/Gallery.css';
import './styles/News.css';
import "react-image-gallery/styles/css/image-gallery.css";
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TPais from './components/TPais';
import Space from './components/Space';
import ContactUs from './components/ContactUs';
import About from './components/About';
import Admin from './components/Admin';
import Footer from './components/Footer';
import React, { useState } from 'react';
import { MuiThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';
import Events from "./components/Events/Events";
import Courses from './components/Courses/Courses';
import CourseInfo from './components/Courses/CourseInfo';
import SpaceGallery from "./components/Galleries/SpaceGallery";
import Images from "./components/Galleries/Images";
import TPaisGallery from "./components/Galleries/TPaisGallery";
import SimulationSolarSystem from "./components/Simulations/SolarSystem";
import SubNavWrapper from "./components/SubNavWrapper";
import Experiments from './components/Experiments/Experiments';
import ExperimentInfo from './components/Experiments/ExperimentInfo';

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
		textAlign: 'center',
		color: 'IndianRed'
	}
}));

export default function App() {
	const classes = useStyles(),
	[course, setCourse] = useState(null),
	[experiment, setExperiment] = useState(null);

	return (
		<MuiThemeProvider theme={theme}>
			<Router>
				<NavBar />
				<SubNavWrapper>
					<div className={classes.root}>
						<Switch>
							<Route path="/" exact render={() => <TPais />} />
							<Route path="/space" exact render={() => <Space />} />
							<Route path="/about" exact render={() => <About />} />
							<Route path="/contactus" exact render={() => <ContactUs />} />
							<Route path="/admin" exact render={() => <Admin />} />
							<Route path="/tpais/events" exact render={() => <Events />} />
							<Route path="/space/events" exact render={() => <Events />} />
							<Route path="/tpais/courses" exact render={() => <Courses setCourse={setCourse} />} />
							<Route path="/tpais/courses/courseinfo" exact render={() => <CourseInfo cInfo={course} />} />
							<Route path="/space/courses" exact render={() => <Courses setCourse={setCourse} />} />
							<Route path="/space/courses/courseinfo" exact render={() => <CourseInfo cInfo={course} />} />
							<Route path="/tpais/experiments" exact render={() => <Experiments setExperiment={setExperiment} />} />
							<Route path="/tpais/experiments/experimentinfo" exact render={() => <ExperimentInfo eInfo={experiment} />} />
							<Route path="/space/experiments" exact render={() => <Experiments setExperiment={setExperiment} />} />
							<Route path="/space/experiments/experimentinfo" exact render={() => <ExperimentInfo eInfo={experiment} />} />
							<Route path="/tpais/gallery" exact render={() => <TPaisGallery />} />
							<Route path='/tpais/gallery/:id' exact render={({ match }) => <Images match={match} pathLink={"t"}/>} />
							<Route exact path="/space/gallery" render={() => <SpaceGallery />} />
							<Route path='/space/gallery/:id' exact render={({ match }) => <Images match={match} pathLink={"s"} />} />
							<Route exact path="/space/experiments" render={() => <SimulationSolarSystem />} />
							<Route render={() => <div className={classes.pageNotFound}><h2>لم يتم العثور على المحتوى المطلوب</h2></div>} />
						</Switch>
					</div>
				</SubNavWrapper>
				<Footer />
			</Router>
		</MuiThemeProvider>
	);
}
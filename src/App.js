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
import Courses from './components/Courses/Courses';
import CourseInfo from './components/Courses/CourseInfo';
import SpaceGallery from "./components/Galleries/SpaceGallery";
import Images from "./components/Galleries/Images";
import TPaisGallery from "./components/Galleries/TPaisGallery";
import TPaisImagesAndVideos from "./components/Galleries/TPaisImagesAndVideos";
import SpaceImagesAndVideos from "./components/Galleries/SpaceImagesAndVideos";
import SpaceVideos from "./components/Galleries/SpaceVideos";
import TPaisVideos from "./components/Galleries/TPaisVideos";
import SubNavWrapper from "./components/SubNavWrapper";
import Experiments from './components/Experiments/Experiments';
import ExperimentInfo from './components/Experiments/ExperimentInfo';
import Events from './components/Events/Events';
import EventInfo from './components/Events/EventInfo';
import PageNotFound from './components/PageNotFound';

const theme = createMuiTheme({
	direction: 'rtl',
	palette: {
		primary: {
			main: '#2d3940',
			contrastText: 'black'
			//TODO
		},
		secondary: {
			main: '#2d3940',
			contrastText: 'white'
			//TODO
		}
	}
});

const useStyles = makeStyles(() => ({
	root: {
		boxShadow: '0 8px 6px -6px #ccc',
		borderRadius: 5,
		padding: 15,
		minHeight: 640
	}
}));

export default function App() {
	const classes = useStyles(),
	[course, setCourse] = useState(null),
	[experiment, setExperiment] = useState(null),
	[event, setEvent] = useState(null);

	return (
		<MuiThemeProvider theme={theme}>
			<Router>
				<NavBar />
				<SubNavWrapper>
					<div className={classes.root}>
						<Switch>
							<Route exact path="/" render={() => <TPais />} />
							<Route exact path="/space" render={() => <Space />} />
							<Route exact path="/about" render={() => <About />} />
							<Route exact path="/contactus" render={() => <ContactUs />} />
							<Route exact path="/admin" render={() => <Admin />} />
							<Route exact path="/tpais/events" render={() => <Events setEvent={setEvent} />} />
							<Route exact path="/space/events" render={() => <Events setEvent={setEvent} />} />
							<Route exact path="/tpais/events/eventinfo" render={() => <EventInfo eInfo={event} />} />
							<Route exact path="/space/events/eventinfo" render={() => <EventInfo eInfo={event} />} />
							<Route exact path="/tpais/courses" render={() => <Courses setCourse={setCourse} />} />
							<Route exact path="/space/courses" render={() => <Courses setCourse={setCourse} />} />
							<Route exact path="/tpais/courses/courseinfo" render={() => <CourseInfo cInfo={course} />} />
							<Route exact path="/space/courses/courseinfo" render={() => <CourseInfo cInfo={course} />} />
							<Route exact path="/tpais/experiments" render={() => <Experiments setExperiment={setExperiment} />} />
							<Route exact path="/space/experiments" render={() => <Experiments setExperiment={setExperiment} />} />
							<Route exact path="/tpais/experiments/:id" render={({ match }) => <ExperimentInfo match={match} eInfo={experiment} />} />
							<Route exact path="/space/experiments/:id" render={({ match }) => <ExperimentInfo match={match} eInfo={experiment} />} />
							<Route exact path="/tpais/gallery/images" render={() => <TPaisGallery />} />
							<Route exact path="/space/gallery/images" render={() => <SpaceGallery />} />
							<Route exact path="/tpais/gallery" render={() => <TPaisImagesAndVideos />} />
							<Route exact path="/space/gallery" render={() => <SpaceImagesAndVideos />} />
							<Route exact path="/tpais/gallery/videos" render={() => <TPaisVideos/>} />
							<Route exact path="/space/gallery/videos" render={() => <SpaceVideos/>} />
							<Route exact path='/tpais/images/:id' render={({ match }) => <Images match={match} pathLink={"t"} />} />
							<Route exact path='/space/images/:id' render={({ match }) => <Images match={match} pathLink={"s"} />} />
							<Route render={() => <PageNotFound />} />
						</Switch>
					</div>
				</SubNavWrapper>
				<Footer />
			</Router>
		</MuiThemeProvider>
	);
}
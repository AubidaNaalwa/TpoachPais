import './styles/App.css';
import './styles/Gallery.css';
import './styles/News.css';
import "react-image-gallery/styles/css/image-gallery.css";
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import ContactUs from './components/ContactUs';
import About from './components/About';
import Admin from './components/Admin';
import Footer from './components/Footer';
import React, { useState } from 'react';
import { MuiThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';
import Courses from './components/Courses/Courses';
import CourseInfo from './components/Courses/CourseInfo';
import GalleryImage from "./components/Galleries/GalleryImage";
import GalleryImageCategories from "./components/Galleries/GalleryImageCategories";
import GalleryMain from "./components/Galleries/GalleryMain";
import GalleryVideos from "./components/Galleries/GalleryVideos";
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
							<Route exact path="/" render={() => <Main />} />
							<Route exact path="/tpais" render={() => <Main />} />
							<Route exact path="/space" render={() => <Main />} />
							<Route exact path="/about" render={() => <About />} />
							<Route exact path="/contactus" render={() => <ContactUs />} />
							<Route exact path="/admin" render={() => <Admin />} />
							<Route exact path="/tpais/events" render={() => <Events setEvent={setEvent} />} />
							<Route exact path="/space/events" render={() => <Events setEvent={setEvent} />} />
							<Route exact path="/tpais/events/:id" render={({ match }) => <EventInfo match={match} eInfo={event} />} />
							<Route exact path="/space/events/:id" render={({ match }) => <EventInfo match={match} eInfo={event} />} />
							<Route exact path="/tpais/courses" render={() => <Courses setCourse={setCourse} />} />
							<Route exact path="/space/courses" render={() => <Courses setCourse={setCourse} />} />
							<Route exact path="/tpais/courses/:id" render={({ match }) => <CourseInfo match={match} cInfo={course} />} />
							<Route exact path="/space/courses/:id" render={({ match }) => <CourseInfo match={match} cInfo={course} />} />
							<Route exact path="/tpais/experiments" render={() => <Experiments setExperiment={setExperiment} />} />
							<Route exact path="/space/experiments" render={() => <Experiments setExperiment={setExperiment} />} />
							<Route exact path="/tpais/experiments/:id" render={({ match }) => <ExperimentInfo match={match} eInfo={experiment} />} />
							<Route exact path="/space/experiments/:id" render={({ match }) => <ExperimentInfo match={match} eInfo={experiment} />} />
							<Route exact path="/tpais/gallery" render={() => <GalleryMain />} />
							<Route exact path="/space/gallery" render={() => <GalleryMain />} />
							<Route exact path="/tpais/gallery/images" render={() => <GalleryImageCategories />} />
							<Route exact path="/space/gallery/images" render={() => <GalleryImageCategories />} />
							<Route exact path='/tpais/gallery/images/:id' render={({ match }) => <GalleryImage match={match} />} />
							<Route exact path='/space/gallery/images/:id' render={({ match }) => <GalleryImage match={match} />} />
							<Route exact path="/tpais/gallery/videos" render={() => <GalleryVideos/>} />
							<Route exact path="/space/gallery/videos" render={() => <GalleryVideos/>} />
							<Route render={() => <PageNotFound />} />
						</Switch>
					</div>
				</SubNavWrapper>
				<Footer />
			</Router>
		</MuiThemeProvider>
	);
}
import './App.css';

import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Pais from './components/Pais';
import Space from './components/Space';
import ContactUs from './components/ContactUs';
import About from './components/About';
import Admin from './components/Admin';
import React from 'react';
import Gallery from "./components/Gallery";
import Images from "./components/Images";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import 'react-bnb-gallery/dist/style.css'

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#2d3940'
		}
	}
});

function App() {
	return (
		<Router>
			<MuiThemeProvider theme={theme}>
				<NavBar />
				<div className="App-header">
					<Switch>
   
						<Route path="/" exact render={() => <Pais />} />
						<Route path="/space" exact render={() => <Space />} />
						<Route path="/about" exact render={() => <About />} />
						<Route path="/contactus" exact render={() => <ContactUs />} />
						<Route path="/admin" exact render={() => <Admin />} />
            <Route exact path="/gallery" render={() => <Gallery />}/>
            <Route path='/gallery/:id' exact render={({match}) => <Images match={match} />} />
						<Route render={() => <h2>لم يتم العثور على المحتوى</h2>} />
                           
					</Switch>
				</div>
			</MuiThemeProvider>
		</Router>
	);

}

export default App;

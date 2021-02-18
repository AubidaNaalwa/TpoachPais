import './App.css';
import React, { Component,useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "../src/components/NavBar";
import SpaceGallery from "./components/SpaceGallery";
import Images from "./components/Images";
import TpoaPaisGallery from "./components/TpoaPaisGallery";
import Astronauts from "./components/Astronauts";


import AstronomicalEvenings from "./components/AstronomicalEvenings";



function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/spacegallery" render={() => <SpaceGallery />}/>
      <Route exact path="/spacegallery/astronomical/evenings" render={() => <AstronomicalEvenings />}/>
      <Route exact path="/spacegallery/astronauts/evenings" render={() => <Astronauts />}/>
      <Route path='/spacegallery/astronomical/evenings/:id' exact render={({match}) => <Images match={match} />} />
      <Route path='/spacegallery/:id' exact render={({match}) => <Images match={match}/>} />
      <Route path='/spacegallery/astronauts/evenings/:id' exact render={({match}) => <Images match={match} />} />
      <Route exact path="/tpoahpaisgallery" render={() => <TpoaPaisGallery />}/>
      <Route path='/tpoahpaisgallery/:id' exact render={({match}) => <Images match={match} />} />

    </Router>
  );
}

export default App;

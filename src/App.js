import './App.css';
import React, { Component,useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "../src/components/NavBar";
import Gallery from "./components/Gallery";
import Images from "./components/Images";

import 'react-bnb-gallery/dist/style.css'


function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/gallery" render={() => <Gallery />}/>
      <Route path='/gallery/:id' exact render={({match}) => <Images match={match} />} />

    </Router>
  );
}

export default App;

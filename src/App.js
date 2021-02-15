import './App.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "../src/components/NavBar";
import ImageGallery from "../src/components/ImageGallery";


function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/imageGallery" render={() => <ImageGallery /> }/>
    </Router>
  );
}

export default App;

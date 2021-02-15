import '../styles/gallery.css';
import React, { Component, useState } from "react";
import ReactBnbGallery from 'react-bnb-gallery';
import 'react-bnb-gallery/dist/style.css'
import ImageGallery from 'react-image-gallery';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


function Gallery(props) {

  return (
    <div>
      <div class="container">

        <div class="gallery-container w-3 h-2">
          <div class="gallery-item">
            <div class="image">
              <Link to={`/gallery/nature`}>
                <img src="http://source.unsplash.com/1600x900/?nature" alt="nature" />
              </Link>
            </div>
            <div class="text">nature 1</div>
          </div>
        </div>

        <div class="gallery-container w-3 h-3">
          <div class="gallery-item">
            <div class="image">
              <Link to={`/gallery/people`}>
                <img src="http://source.unsplash.com/1600x900/?people" alt="people" />
              </Link>
            </div>
            <div class="text">people 2</div>
          </div>
        </div>

        <div class="gallery-container h-2">
          <div class="gallery-item">
            <div class="image">
              <Link to={`/gallery/sport`}>
                <img src="http://source.unsplash.com/1600x900/?sport" alt="sport" />
              </Link>
            </div>
            <div class="text">sport 3</div>
          </div>
        </div>

        <div class="gallery-container w-2">
          <div class="gallery-item">
            <div class="image">
              <Link to={`/gallery/fitness`}>
                <img src="http://source.unsplash.com/1600x900/?fitness" alt="fitness" />
              </Link>
            </div>
            <div class="text">fitness 4</div>
          </div>
        </div>

        <div class="gallery-container w-4 h-1">
          <div class="gallery-item">
            <div class="image">
              <Link to={`/gallery/food`}>
                <img src="http://source.unsplash.com/1600x900/?food" alt="food" />
              </Link>
            </div>
            <div class="text">food 5</div>
          </div>
        </div>

        <div class="gallery-container">
          <div class="gallery-item">
            <div class="image">
              <Link to={`/gallery/travel`}>
                <img src="http://source.unsplash.com/1600x900/?travel" alt="travel" />
              </Link>
            </div>
            <div class="text">travel 6</div>
          </div>
        </div>


        <div class="gallery-container w-3 h-2">
          <div class="gallery-item">
            <div class="image">
              <Link to={`/gallery/nature`}>
                <img src="http://source.unsplash.com/1600x900/?nature" alt="nature" />
              </Link>
            </div>
            <div class="text">nature 1</div>
          </div>
        </div>

        <div class="gallery-container w-3 h-3">
          <div class="gallery-item">
            <div class="image">
              <Link to={`/gallery/people`}>
                <img src="http://source.unsplash.com/1600x900/?people" alt="people" />
              </Link>
            </div>
            <div class="text">people 2</div>
          </div>
        </div>

        <div class="gallery-container h-2">
          <div class="gallery-item">
            <div class="image">
              <Link to={`/gallery/sport`}>
                <img src="http://source.unsplash.com/1600x900/?sport" alt="sport" />
              </Link>
            </div>
            <div class="text">sport 3</div>
          </div>
        </div>

        <div class="gallery-container w-2">
          <div class="gallery-item">
            <div class="image">
              <Link to={`/gallery/fitness`}>
                <img src="http://source.unsplash.com/1600x900/?fitness" alt="fitness" />
              </Link>
            </div>
            <div class="text">fitness 4</div>
          </div>
        </div>

        <div class="gallery-container w-4 h-1">
          <div class="gallery-item">
            <div class="image">
              <Link to={`/gallery/food`}>
                <img src="http://source.unsplash.com/1600x900/?food" alt="food" />
              </Link>
            </div>
            <div class="text">food 5</div>
          </div>
        </div>

        <div class="gallery-container">
          <div class="gallery-item">
            <div class="image">
              <Link to={`/gallery/travel`}>
                <img src="http://source.unsplash.com/1600x900/?travel" alt="travel" />
              </Link>
            </div>
            <div class="text">travel 6</div>
          </div>
        </div>


      </div>

    </div>
  )

}

export default Gallery
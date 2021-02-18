import '../styles/gallery.css';
import React, { Component, useState } from "react";
import ReactBnbGallery from 'react-bnb-gallery';
import 'react-bnb-gallery/dist/style.css'
import ImageGallery from 'react-image-gallery';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


function Astronauts(props) {

  return (
    <div>

      <h1>رواد فضاء</h1>
    
      <div class="grid-container">
        <div>
          <Link to={`/spacegallery/astronauts/evenings/donaldthomas`}>
            <img class='grid-item grid-item-1' src='https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.0-9/83766389_1720817534709757_4619740052769996800_o.jpg?_nc_cat=110&ccb=3&_nc_sid=cdbe9c&_nc_ohc=1dL5ZpauZwMAX-SyENs&_nc_ht=scontent.ftlv5-1.fna&oh=f9de11285a0d59e8fab2d7b875cfc287&oe=605322E5' alt='donaldthomas' />
          </Link>
          <p>  دونالد توماس  </p>
        </div>
    
 
     

        <div>
          <Link to={`/spacegallery/astronomical/evenings/nicoleshtot`}>
            <img class='grid-item grid-item-5' src='https://scontent.ftlv5-1.fna.fbcdn.net/v/t31.0-8/10955715_335915199866671_157822217490600988_o.jpg?_nc_cat=110&ccb=3&_nc_sid=cdbe9c&_nc_ohc=4e1LIS3YmOoAX8uasjD&_nc_ht=scontent.ftlv5-1.fna&oh=3358b3f7e2a6ad093606040cd8bbe7f0&oe=60514661' alt='nicoleshtot' />
          </Link>
          <p>نيكول ستوت</p>
        </div>
      
     
      </div>

    </div>
  )

}

export default Astronauts
import '../styles/gallery.css';
import React, { Component, useState } from "react";
import ReactBnbGallery from 'react-bnb-gallery';
import 'react-bnb-gallery/dist/style.css'
import ImageGallery from 'react-image-gallery';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


function SpaceGallery(props) {

  return (
    <div>

      <h1>مركز الفضاء</h1>
    
      <div class="grid-container">
        <div>
          <Link to={`/spacegallery/astronauts/evenings`}>
            <img class='grid-item grid-item-1' src='https://scontent.ftlv6-1.fna.fbcdn.net/v/t1.0-9/84338516_1720819968042847_8121975008630145024_o.jpg?_nc_cat=105&ccb=3&_nc_sid=cdbe9c&_nc_ohc=C_Qp4VBLcRYAX8AStob&_nc_ht=scontent.ftlv6-1.fna&oh=aa9620d02abd70797a708810f87c4b6b&oe=604F8DDC' alt='astronauts' />
          </Link>
          <p>  رواد فضاء </p>
        </div>
    
 
        <div>
          <Link to={`/spacegallery/satelliteproject`}>
            <img class='grid-item grid-item-3' src='https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.0-9/134135569_1174407189641356_4519396872006549680_n.jpg?_nc_cat=109&ccb=3&_nc_sid=e3f864&_nc_ohc=BsgknIXkwM8AX_dwe8a&_nc_ht=scontent.ftlv5-1.fna&oh=b2a807e3cd1d1c85085de62dc6a61f70&oe=60536B42' alt='satelliteproject' />
          </Link>
          <p>مشروع القمر الصناعي</p>
        </div>
       
     
        <div>
          <Link to={`/spacegallery/astronomical/evenings`}>
            <img class='grid-item grid-item-5' src='https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.0-9/74305855_1342003602625644_9133097536599359488_n.jpg?_nc_cat=106&ccb=3&_nc_sid=730e14&_nc_ohc=rRqE2J0pGWUAX_sLtoS&_nc_oc=AQn25WHFcHeZoxGo2dlAu2BXN-xKwmHt2I9tiqqSYuTsj62pLVNs7azslwu0oOpuBsA&_nc_ht=scontent.ftlv5-1.fna&oh=d09dc4c87515476c4a2d5b1cf7d9245b&oe=60510101' alt='astronomicalevenings' />
          </Link>
          <p>أمسيات فلكية</p>
        </div>
      
     
        <div>
          <Link to={`/spacegallery/moonsmagnetism`}>
            <img class='grid-item grid-item-7' src='https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.0-9/119523555_209259437281028_3111341361096534206_n.jpg?_nc_cat=102&ccb=3&_nc_sid=8bfeb9&_nc_ohc=yTxvDjuZs98AX_pyzUf&_nc_ht=scontent.ftlv5-1.fna&oh=0a6d78a95049752cc0a8d29bf8873f09&oe=60522E3F' alt='moonsmagnetism' />
          </Link>
          <p> مغناطيسية القمر </p>
        </div>

        <div>
          <Link to={`/spacegallery/Spaceandastronomyresearch`}>
            <img class='grid-item grid-item-8' src='https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.0-9/64212091_1235586776600661_3268584538774700032_n.jpg?_nc_cat=102&ccb=3&_nc_sid=730e14&_nc_ohc=nVVTh0uyYcQAX8eqWGd&_nc_ht=scontent.ftlv5-1.fna&oh=606d72eb2ff3fa4e3b94f20097b98b09&oe=60545048' alt='Spaceandastronomyresearch' />
          </Link>
          <p>ابحاث الفضاء والفلك </p>
        </div>
        
        <div>
          <Link to={`/spacegallery/aboutus`}>
            <img class='grid-item grid-item-5' src='https://scontent.ftlv6-1.fna.fbcdn.net/v/t1.0-9/134298184_1174406146308127_3112139240748643278_n.jpg?_nc_cat=105&ccb=3&_nc_sid=8bfeb9&_nc_ohc=StdK3OJSPDcAX_iXLvU&_nc_ht=scontent.ftlv6-1.fna&oh=ecdf9d643b86d52eb58501f636d7689c&oe=605133BC' alt='aboutUs' />
          </Link>
          <p> عن المركز</p>
        </div>
       
       
       
      </div>

    </div>
  )

}

export default SpaceGallery
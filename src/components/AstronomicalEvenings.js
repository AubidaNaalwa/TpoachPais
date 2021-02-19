import '../styles/gallery.css';
import React, { Component, useState } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


function AstronomicalEvenings(props) {

  return (
    <div>

      <h1>أمسيات فلكية</h1>
    
      <div class="grid-container">
        <div>
          <Link to={`/space/gallery/astronomical/evenings/almajdwaebenseina`}>
            <img class='grid-item grid-item-1' src='https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.0-9/74496437_1362580080567996_3103105891310764032_o.jpg?_nc_cat=111&ccb=3&_nc_sid=730e14&_nc_ohc=_leKZ5HFFq4AX90Wn4A&_nc_ht=scontent.ftlv5-1.fna&oh=7e262374b441841ec23b8741d17fa03f&oe=60517769' alt='almajdwaebenseina' />
          </Link>
          <p>  أمسية - المجد و ابن سينا  </p>
        </div>
    
 
        <div>
          <Link to={`/space/gallery/astronomical/evenings/omarbenalkhatab`}>
            <img class='grid-item grid-item-3' src='https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.0-9/74381425_1341046416054696_8179613306533707776_n.jpg?_nc_cat=100&ccb=3&_nc_sid=730e14&_nc_ohc=U8Gsf1VfV_QAX9HKNJB&_nc_ht=scontent.ftlv5-1.fna&oh=507b0a4941606df14fe712ddd8daefb9&oe=60539967' alt='omarbenalkhatab' />
          </Link>
          <p>أمسية - عمر بن الخطاب</p>
        </div>
       
     
        <div>
          <Link to={`/space/gallery/astronomical/evenings/ajyalschool`}>
            <img class='grid-item grid-item-5' src='https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.0-9/74333477_1343872079105463_8262253949097082880_n.jpg?_nc_cat=106&ccb=3&_nc_sid=730e14&_nc_ohc=PdJZeTnzqZ8AX8IkvuG&_nc_ht=scontent.ftlv5-1.fna&oh=2fdc5aba8c511901fa99f72cb60d793f&oe=6051A59D' alt='ajyalschool' />
          </Link>
          <p>أمسية - مدرسة أجيال</p>
        </div>
      
     
        <div>
          <Link to={`/space/gallery/astronomical/evenings/ebenroshdschool`}>
            <img class='grid-item grid-item-7' src='https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.0-9/74305855_1342003602625644_9133097536599359488_n.jpg?_nc_cat=106&ccb=3&_nc_sid=730e14&_nc_ohc=rRqE2J0pGWUAX_sLtoS&_nc_oc=AQn25WHFcHeZoxGo2dlAu2BXN-xKwmHt2I9tiqqSYuTsj62pLVNs7azslwu0oOpuBsA&_nc_ht=scontent.ftlv5-1.fna&oh=d09dc4c87515476c4a2d5b1cf7d9245b&oe=60510101' alt='ebenroshdschool' />
          </Link>
          <p> أمسية - مدرسة ابن رشد </p>
        </div>

        <div>
          <Link to={`/space/gallery/astronomical/evenings/alshafeaeschool`}>
            <img class='grid-item grid-item-8' src='https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.0-9/74634601_1349453295214008_4200801585439178752_n.jpg?_nc_cat=110&ccb=3&_nc_sid=730e14&_nc_ohc=Ju7O338kPisAX9BrnLS&_nc_ht=scontent.ftlv5-1.fna&oh=a0e3d47154bd3e72314e6800142e231d&oe=60532D69' alt='alshafeaeschool' />
          </Link>
          <p>أمسية - مدرسة الشافعي </p>
        </div>
        
    
       
       
       
      </div>

    </div>
  )

}

export default AstronomicalEvenings
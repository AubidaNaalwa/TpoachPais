import '../styles/gallery.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, useLocation } from 'react-router-dom'
import axios from 'axios';

function SpaceGallery(props) {
  const location = useLocation();
  console.log(location.pathname)

  const [gallery, setGallery] = useState([]);

  const getCategoriesFromDb = async () => {
    const categoriesArray = await axios.get('/imagesCategory/tpoach')
    setGallery(categoriesArray.data.categories)
  }
  
  useEffect(() => {
    getCategoriesFromDb()
  }, [])


  return (
    <div>

      <h1>مركز الفضاء</h1>

      <div class="grid-container">


        <div>
          {gallery.forEach(g => {

            <Link to={`/space/gallery/${g.name}`}>
              <img class='grid-item grid-item-3' src='g.img' alt='satelliteproject' />
            </Link>
            {<p>{g.category}</p>}
          })}
          
        </div>


        <div>
          <Link to={`/space/gallery/astronomical/evenings`}>
            <img  src='https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.0-9/74305855_1342003602625644_9133097536599359488_n.jpg?_nc_cat=106&ccb=3&_nc_sid=730e14&_nc_ohc=rRqE2J0pGWUAX_sLtoS&_nc_oc=AQn25WHFcHeZoxGo2dlAu2BXN-xKwmHt2I9tiqqSYuTsj62pLVNs7azslwu0oOpuBsA&_nc_ht=scontent.ftlv5-1.fna&oh=d09dc4c87515476c4a2d5b1cf7d9245b&oe=60510101' alt='astronomicalevenings' />
          </Link>
          <p>أمسيات فلكية</p>
        </div>


        <div>
          <Link to={`/space/gallery/moonsmagnetism`}>
            <img src='https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.0-9/119523555_209259437281028_3111341361096534206_n.jpg?_nc_cat=102&ccb=3&_nc_sid=8bfeb9&_nc_ohc=yTxvDjuZs98AX_pyzUf&_nc_ht=scontent.ftlv5-1.fna&oh=0a6d78a95049752cc0a8d29bf8873f09&oe=60522E3F' alt='moonsmagnetism' />
          </Link>
          <p> مغناطيسية القمر </p>
        </div>

        <div>
          <Link to={`/space/gallery/Spaceandastronomyresearch`}>
            <img  src='https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.0-9/64212091_1235586776600661_3268584538774700032_n.jpg?_nc_cat=102&ccb=3&_nc_sid=730e14&_nc_ohc=nVVTh0uyYcQAX8eqWGd&_nc_ht=scontent.ftlv5-1.fna&oh=606d72eb2ff3fa4e3b94f20097b98b09&oe=60545048' alt='Spaceandastronomyresearch' />
          </Link>
          <p>ابحاث الفضاء والفلك </p>
        </div>

        <div>
          <Link to={`/space/gallery/aboutus`}>
            <img  src='https://scontent.ftlv6-1.fna.fbcdn.net/v/t1.0-9/134298184_1174406146308127_3112139240748643278_n.jpg?_nc_cat=105&ccb=3&_nc_sid=8bfeb9&_nc_ohc=StdK3OJSPDcAX_iXLvU&_nc_ht=scontent.ftlv6-1.fna&oh=ecdf9d643b86d52eb58501f636d7689c&oe=605133BC' alt='aboutUs' />
          </Link>
          <p> عن المركز</p>
        </div>



      </div>

    </div>
  )

}

export default SpaceGallery
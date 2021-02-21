import React from "react";
import '../styles/gallery.css';
import { useEffect, useState } from "react";
import axios from 'axios';
import Gallery2 from './Gallery2'


function Astronauts(props) {

  const [gallery, setGallery] = useState([]);

  const getCategoriesFromDb = async () => {
    const id = props.match.params.id1;
    let pathLink 
    props.pathLink ==="s" ? pathLink = `/space/images/${id}` :  pathLink = `/tpoach/images/${id}`
    const categoriesArray = await axios.get(pathLink)
    const arr = categoriesArray.data.images
    setGallery(arr)
    console.log(arr)
    
  }
  
  useEffect(() => {
    getCategoriesFromDb()
  }, [])

  return (
    <div>

      <h1>رواد فضاء</h1>

      <div class="grid-container">
          {gallery.map(g => <Gallery2 gallery={g} key={g._id}/> )}
      </div>
          
     
   

    </div>
  )

}

export default Astronauts
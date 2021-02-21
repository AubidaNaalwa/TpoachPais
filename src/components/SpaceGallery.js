import '../styles/gallery.css';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import Gallery from './Gallery'

function SpaceGallery() {

  const [gallery, setGallery] = useState([]);

  const getCategoriesFromDb = async () => {
    const categoriesArray = await axios.get('/imagesCategory/space')
    setGallery(categoriesArray.data.categories)
  }
  
  useEffect(() => {
    getCategoriesFromDb()
  }, [])


  return (
    <div>

      <h1>مركز الفضاء</h1>

      <div class="grid-container">
          {gallery.map(g => <Gallery gallery={g} key={g._id}/> )}
      </div>

    </div>
  )

}

export default SpaceGallery
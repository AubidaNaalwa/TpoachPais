import React from "react";
import '../styles/gallery.css';
import { useEffect, useState } from "react";
import axios from 'axios';
import Gallery from './Gallery'


function TpoaPaisGallery() {

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

      <h1 className="galleryTitle">مركز تبواح بايس</h1>

      <div class="grid-container">
          {gallery.map(g => <Gallery gallery={g} key={g._id} path={'t'}/> )}
      </div>

    </div>
  )

}

export default TpoaPaisGallery
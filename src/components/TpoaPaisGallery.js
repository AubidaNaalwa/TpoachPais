import React from "react";
import '../styles/gallery.css';
import { useEffect, useState } from "react";
import axios from 'axios';
import Gallery3 from './Gallery3'


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

      <h1>مركز تبواح بايس</h1>

      <div class="grid-container">
          {gallery.map(g => <Gallery3 gallery={g} key={g._id}/> )}
      </div>

    </div>
  )

}

export default TpoaPaisGallery
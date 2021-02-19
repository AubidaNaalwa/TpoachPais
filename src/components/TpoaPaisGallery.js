import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


function TpoaPaisGallery(props) {

  return (
    <div>

      <h1>مركز تبواح بايس</h1>
    
      <div class="grid-container">
        <div>
          <Link to={`/tpais/gallery/futurescientistsproject`}>
            <img class='grid-item grid-item-1' src='https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.0-9/72227264_2592770710788103_487975204711038976_o.jpg?_nc_cat=106&ccb=3&_nc_sid=8bfeb9&_nc_ohc=1bj1ZyXJwcoAX-bAXEu&_nc_ht=scontent.ftlv5-1.fna&oh=22066837f492adab977f8be2ec593281&oe=60537265' alt='futurescientistsproject' />
          </Link>
          <p>  مشروع عالمات المستقبل </p>
        </div>
    
 
  
     
        <div>
          <Link to={`/tpais/gallery/ezharshai`}>
            <img class='grid-item grid-item-5' src='https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.0-9/118762738_1623083504517651_5142402161742477295_n.jpg?_nc_cat=101&ccb=3&_nc_sid=8bfeb9&_nc_ohc=Nwc52K4TRI4AX-JkIt3&_nc_ht=scontent.ftlv5-1.fna&oh=8f5fd4e163b9146fdc1bb95349214bfb&oe=60524F0E' alt='ezharshai' />
          </Link>
          <p>وزير العلوم يزهار شاي</p>
        </div>
      
     
        <div>
          <Link to={`/tpais/gallery/aboutus`}>
            <img class='grid-item grid-item-7' src='https://scontent.ftlv6-1.fna.fbcdn.net/v/t31.0-8/10987430_421525588006788_3462893898421249036_o.jpg?_nc_cat=110&ccb=3&_nc_sid=e3f864&_nc_ohc=SrVxvJ7DgBwAX9xfZA5&_nc_ht=scontent.ftlv6-1.fna&oh=ffcc3c9c3411c94d18cb57f04e8ff8d5&oe=60519B70' alt='aboutus' />
          </Link>
          <p>عن المركز    </p>
        </div>

        <div>
          <Link to={`/tpais/gallery/alghazaleye`}>
            <img class='grid-item grid-item-8' src='https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.0-9/74359449_1348412265318111_4346813491202490368_n.jpg?_nc_cat=109&ccb=3&_nc_sid=730e14&_nc_ohc=yOUIcuKi-R0AX_ag37n&_nc_ht=scontent.ftlv5-1.fna&oh=4087693a31d63d67ae67ce036cb21fea&oe=60529045' alt='alghazaleye' />
          </Link>
          <p>يوم قمه - ابتدايه الغزاليه </p>
        </div>
        
        <div>
          <Link to={`/tpais/gallery/alzahraa`}>
            <img class='grid-item grid-item-5' src='https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.0-9/76601287_1360651487427522_8595895078893912064_n.jpg?_nc_cat=102&ccb=3&_nc_sid=730e14&_nc_ohc=4kNMz50fwfcAX9LEmkk&_nc_ht=scontent.ftlv5-1.fna&oh=f139a1a8fa83c45014e418133850d6d3&oe=60541204' alt='alzahraa' />
          </Link>
          <p>  مدرسه الزهراء - تجارب</p>
        </div>
       
       
       
      </div>

    </div>
  )

}

export default TpoaPaisGallery
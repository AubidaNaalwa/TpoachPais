import '../styles/gallery.css';
import React, { Component, useState } from "react";
import ReactBnbGallery from 'react-bnb-gallery';
import 'react-bnb-gallery/dist/style.css'
import ImageGallery from 'react-image-gallery';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


function Gallery(props) {

  return (
    <div>
      {/* <div class="container">

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


      </div> */}

      <h1></h1>
      <h1></h1>
      <h1></h1>
      <div class="grid-container">
        <div>
          <Link to={`/gallery/drsandy`}>
            <img class='grid-item grid-item-1' src='https://scontent.ftlv6-1.fna.fbcdn.net/v/t1.0-9/51276002_2178481969133557_5598443768157044736_o.jpg?_nc_cat=105&ccb=3&_nc_sid=cdbe9c&_nc_ohc=w3CxAn7gVKQAX_EPGkf&_nc_ht=scontent.ftlv6-1.fna&oh=41afd0d44a8f886e8999cfc0c71665b8&oe=60513902' alt='drsandy' />
          </Link>
          <p>صور من زيارة رائدة الفضاء د. ساندي ماجنوس</p>
        </div>
        <div>
          <Link to={`/gallery/ebenkhaldon`}>
            <img class='grid-item grid-item-1' src='https://scontent.ftlv6-1.fna.fbcdn.net/v/t1.0-9/51682647_2178486182466469_3689503909446942720_o.jpg?_nc_cat=103&ccb=3&_nc_sid=cdbe9c&_nc_ohc=LulxXXuWyksAX-2G8Pk&_nc_ht=scontent.ftlv6-1.fna&oh=1fb7a16e0dc674d403213ef057d40c51&oe=60520D8E' alt='ebenkhaldon' />
          </Link>
          <p>صور من مشاركة مدرسة ابن خلدون الابتدائية بفعاليات مرصد القاسمي بإطار أسبوع الفضاء</p>
        </div>
       <div>
          <Link to={`/gallery/engineersCourses`}>
            <img class='grid-item grid-item-4' src='https://scontent.ftlv6-1.fna.fbcdn.net/v/t31.0-8/p843x403/11953305_508010486024964_539741573691308900_o.jpg?_nc_cat=106&ccb=3&_nc_sid=cdbe9c&_nc_ohc=NJcK9BXE7SQAX-yELui&_nc_ht=scontent.ftlv6-1.fna&tp=6&oh=d2f19675a3ff076f0bf62b60a57ce1ad&oe=604FD5CE' alt='engineersCourses' />
          </Link>
          <p>دورات المهندسين الشباب</p>
        </div>
        <div>
          <Link to={`/gallery/moonProject`}>
            <img class='grid-item grid-item-3' src='https://scontent.ftlv6-1.fna.fbcdn.net/v/t1.0-9/134626136_1174148826333859_2806268067497991307_n.jpg?_nc_cat=102&ccb=3&_nc_sid=8bfeb9&_nc_ohc=vNkE-YW-Pp0AX_dvIYG&_nc_ht=scontent.ftlv6-1.fna&oh=030c2970b6c56e19caf016ad7b738b2d&oe=60518B45' alt='moonProject' />
          </Link>
          <p>مشروع القمر الصناعي</p>
        </div>
         <div>
          <Link to={`/gallery/eshrakah`}>
            <img class='grid-item grid-item-2' src='https://scontent.ftlv6-1.fna.fbcdn.net/v/t1.0-9/34395871_201245673850309_4344247033494765568_n.png?_nc_cat=110&ccb=3&_nc_sid=09cbfe&_nc_ohc=8QZbOAvuITgAX-xzNgc&_nc_ht=scontent.ftlv6-1.fna&oh=21c613244f12b5b5b4226b579f03c19d&oe=6051DE0D' alt='eshrakah' />
          </Link>
          <p>جمعية إشراقة للتربية والعلوم</p>
        </div>
     
        <div>
          <Link to={`/gallery/donaldThomas`}>
            <img class='grid-item grid-item-5' src='https://scontent.ftlv6-1.fna.fbcdn.net/v/t1.0-9/84338516_1720819968042847_8121975008630145024_o.jpg?_nc_cat=105&ccb=3&_nc_sid=cdbe9c&_nc_ohc=C_Qp4VBLcRYAX8AStob&_nc_ht=scontent.ftlv6-1.fna&oh=aa9620d02abd70797a708810f87c4b6b&oe=604F8DDC' alt='donaldThomas' />
          </Link>
          <p>الأمسية الفلكية وزيارة رائد الفضاء دونالد توماس</p>
        </div>
        <div>
          <Link to={`/gallery/tpoaPais`}>
            <img class='grid-item grid-item-6' src='https://scontent.ftlv6-1.fna.fbcdn.net/v/t31.0-8/10987430_421525588006788_3462893898421249036_o.jpg?_nc_cat=110&ccb=3&_nc_sid=e3f864&_nc_ohc=SrVxvJ7DgBwAX_fDi1P&_nc_ht=scontent.ftlv6-1.fna&oh=156652184b5b92aef35b0eca03fc3de2&oe=60519B70' alt='tpoaPais' />
          </Link>
          <p>مركز تبواح بايس الطيبة</p>
        </div>
        <div>
          <Link to={`/gallery/futureProject`}>
            <img class='grid-item grid-item-6' src='https://scontent.ftlv6-1.fna.fbcdn.net/v/t1.0-9/72227264_2592770710788103_487975204711038976_o.jpg?_nc_cat=106&ccb=3&_nc_sid=8bfeb9&_nc_ohc=1bj1ZyXJwcoAX8oyEfC&_nc_ht=scontent.ftlv6-1.fna&oh=51cbb7a8fac9ef9b44d46e0a4c36e0b1&oe=604F7DE5' alt='futureProject' />
          </Link>
          <p>مشروع عالمات المستقبل</p>
        </div>
        <div>
          <Link to={`/gallery/moonsMagnetism`}>
            <img class='grid-item grid-item-7' src='https://scontent.ftlv6-1.fna.fbcdn.net/v/t1.0-9/83581045_118639776342995_3005562416604905472_n.jpg?_nc_cat=105&ccb=3&_nc_sid=8bfeb9&_nc_ohc=9EeRzghlPC0AX-2K503&_nc_ht=scontent.ftlv6-1.fna&oh=c13ff451392cb55bb21ba5e34a3853f6&oe=604F8DCD' alt='moonsMagnetism' />
          </Link>
          <p>مشروع بحث 5 وحدات - مغناطيسية القمر</p>
        </div>

        <div>
          <Link to={`/gallery/space`}>
            <img class='grid-item grid-item-8' src='https://scontent.ftlv6-1.fna.fbcdn.net/v/t1.0-9/31706416_868904483234404_7040915303387103232_n.jpg?_nc_cat=100&ccb=3&_nc_sid=8bfeb9&_nc_ohc=sIt5BlNcMJsAX97mfOD&_nc_ht=scontent.ftlv6-1.fna&oh=bf1e97563e5b24b786f029594f402794&oe=604FFA69' alt='space' />
          </Link>
          <p>مركز الفضاء</p>
        </div>
        
        <div>
          <Link to={`/gallery/travel`}>
            <img class='grid-item grid-item-10' src='https://res.cloudinary.com/dnngdbnuq/image/upload/v1613488691/oly2019_l71fcy.png' alt='' />
          </Link>
          <p>أولمبياد 2019</p>
        </div>
        <div>
          <Link to={`/gallery/engineersCourses`}>
            <img class='grid-item grid-item-4' src='https://scontent.ftlv6-1.fna.fbcdn.net/v/t31.0-8/p843x403/11953305_508010486024964_539741573691308900_o.jpg?_nc_cat=106&ccb=3&_nc_sid=cdbe9c&_nc_ohc=NJcK9BXE7SQAX-yELui&_nc_ht=scontent.ftlv6-1.fna&tp=6&oh=d2f19675a3ff076f0bf62b60a57ce1ad&oe=604FD5CE' alt='engineersCourses' />
          </Link>
          <p>دورات المهندسين الشباب</p>
        </div>
       
       
      </div>

    </div>
  )

}

export default Gallery
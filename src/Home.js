import React from "react";
import "./home.css";
import Product from "./Product";
   
import { Carousel } from 'react-responsive-carousel';
//import 'bootstrap/dist/css/bootstrap.min.css';

//// https://front-98bb6.web.app

import "react-responsive-carousel/lib/styles/carousel.min.css"; 
function Home() {
  return (
    <div className="home">
      <div className="home__container">

        <Carousel showIndicators={false} showThumbs={false}
          className="home__image"
          autoPlay
          interval={2000}
          infiniteLoop
          showArrows={false}
        >
                <div>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/img18/home/journeys/Zjk0ZWU0ZTIt/Zjk0ZWU0ZTIt-ZTEwODM4YjMt-w3000._CB663200009_.jpg" />
                </div>
                <div>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/NzkzZDYxNTkt/NzkzZDYxNTkt-OWQwMzQwNDUt-w3000._CB663569411_.jpg" />
                </div>
                <div>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/Y2UwYWM0MDQt/Y2UwYWM0MDQt-ODg1Nzk2MTYt-w3000._CB668789438_.jpg" />
          </div>
 <div>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />
                </div>
            </Carousel>
        {/* <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        /> */}

        <div className="home__row">
          <Product
            id="12321341"
            title="2021 Newest Lenovo Ideapad 3 Laptop, 15.6 Full HD 1080P Non-Touch Display, AMD Ryzen 3 3250U Processor, 8GB DDR4 RAM, 256GB PCIe NVMe SSD, Webcam, Wi-Fi,"
            price={519.0}
            rating={5}
            image="https://m.media-amazon.com/images/I/71WTF+xiiHL._AC_UY218_.jpg"
          />
          <Product
            id="49538094"
            title="Moderno Kids Mercedes C63S 12V Power Children Ride-On Car with R/C Parental Remote + EVA Foam Rubber Wheels + Leather Seat + MP3 USB Music Player + LED Lights (Red)"
            price={279.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71al5jvpVJL._AC_UL320_.jpg"
          />
        </div>
 <div className="home__row">
          <Product
            id="8549030"
            title="Panasonic LUMIX FZ300 Long Zoom Digital Camera Features 12.1 Megapixel, 1/2.3-Inch Sensor, 4K Video, WiFi, Splash & Dustproof Camera Body, LEICA DC 24X F2.8 Zoom Lens -"
            price={447.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81xVbbwlqlL._AC_UY218_.jpg"
          />
          <Product
            id="45234930"
            title="Apple Watch Series 5 (GPS + Cellular, 40mm) - ​ Stainless Steel Case with Milanese Loop"
            price={628.57}
            rating={5}
            image="https://m.media-amazon.com/images/I/91rEoDeRRWL._AC_UY218_.jpg"
          />
          <Product
            id="5432354345"
            title="LG OLED65C1PUB Alexa Built-in C1 Series 65 4K Smart OLED TV (2021)"
            price={2099.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/916NVBBT0mS._AC_UY218_.jpg"
          />  
        </div>
 <div className="home__row">
          <Product
            id="3849050"
            title="Amazon Essentials
Men's Regular-fit Short-Sleeve Print"
            price={16.90}
            rating={4}
            image="https://m.media-amazon.com/images/I/91BHKP77tyL._AC_UL320_.jpg"
          />
          <Product
            id="24593340"
            title="Nike
Mens Dri-FIT Short Sleeve Polo Shirt Sky Blue"
            price={50.19}
            rating={5}
            image="https://m.media-amazon.com/images/I/5186h0-pGGL._AC_UL320_.jpg"
          />
          <Product
            id="3543254345"
            title="Cliramer
Summer Tops for Women Casual Short Sleeve Loose Fit Sunflower"
            price={5.94}
            rating={4}
            image="https://m.media-amazon.com/images/I/61cr9T4nYfL._AC_UL320_.jpg"
          />  
        </div>
 <div className="home__row">
          <Product
            id="2103850"
            title="TOPLUS
Fitness Tracker, Activity Tracker for Heart Monitor, Sleep Tracker, Smart"
            price={15.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71cM2ZQQekL._AC_UL320_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />  
        </div>













        






        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

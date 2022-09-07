import "../App.css"
import { Link } from "react-router-dom"
import friednyama from "../images/friednyama.jpg"
import kuku from "../images/kuku.jpg"
import lobster from "../images/lobster.jpg"
import mkunga from "../images/mkunga.jpg"
import pilau from "../images/pilau.jpg"
import mkwaju from "../images/tamarindjuice.jpg"
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa"
import React from 'react'

const Home = () => {
  return (
    <div className="home_section">
        <nav>
            <Link to="">Home</Link>
            <Link to="about">About Us</Link>
            <Link to="offers">Offers</Link>
            <Link to="contacts">Contacts</Link>
        </nav>
       <p className="banner">Get Started with our delicious meals</p>
       <div className="food-section">
        <div className="food-card">
          <img  src={pilau} alt="pilau"/>
          <h2>FoodType:Pilau</h2>
          <h2>Price : <span>Ksh 750</span></h2>
          <button className="order-button">Order Now</button>
        </div>
        <div className="food-card">
          <img  src={kuku} alt="kuku"/>
          <h2>FoodType: kuku kienyeji</h2>
          <h2>Price : <span>Ksh 900</span></h2>
          <button className="order-button">Order Now</button>
        </div>
        <div className="food-card">
          <img  src={lobster} alt="kuku"/>
          <h2>FoodType: Pweza</h2>
          <h2>Price : <span>Ksh 600</span></h2>
          <button className="order-button">Order Now</button>
        </div>
        {/* <div className="food-card">
          <img  src={mkunga} alt="mkunga"/>
          <h2>FoodType: Mkunga</h2>
          <h2>Price : <span>Ksh 1600</span></h2>
          <button className="order-button">Order Now</button>
        </div>
        <div className="food-card">
          <img  src={pilau} alt="pilau"/>
          <h2>FoodType: Pilau</h2>
          <h2>Price : <span>Ksh 450</span></h2>
          <button className="order-button">Order Now</button>
        </div>
        <div className="food-card">
          <img  src={mkwaju} alt="mkwaju"/>
          <h2>FoodType: mkwaju</h2>
          <h2>Price : <span>Ksh 400</span></h2>
          <button className="order-button">Order Now</button>
        </div> */}

       </div>
       <hr />
       <footer>
        <FaTwitter className="twitter" />
        <FaFacebook className="facebook" />
        <FaInstagram className="instagram" />
       </footer>

       
    </div>
  )
}

export default Home
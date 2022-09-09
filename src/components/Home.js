import "../App.css"
import { Link } from "react-router-dom"
import friednyama from "../images/friednyama.jpg"
import kuku from "../images/kuku.jpg"
import lobster from "../images/lobster.jpg"
import mkunga from "../images/mkunga.jpg"
import pilau from "../images/pilau.jpg"
import mkwaju from "../images/tamarindjuice.jpg"
import {FaFacebook, FaInstagram, FaOctopusDeploy, FaRegObjectUngroup, FaTwitter} from "react-icons/fa"
import React, {useState,useEffect} from 'react'
import NewComment from "./NewComment"

const Home = () => {
  const [buttonText, setButtonText] = useState('Order Now');
  const [buttonText2, setButtonText2] = useState('Order Now');
  const [buttonText3, setButtonText3] = useState('Order Now');
  const [foods,setFoods]=useState([])

  function handleClick() {
    setButtonText('Ordered!');
  }
  function handleClick2() {
    setButtonText2('Ordered!');
  }
  function handleClick3() {
    setButtonText3('Ordered!');
  }

  useEffect(()=>{
    fetch("http://127.0.0.1:9292/foods")
       .then(r => r.json())
       .then(data =>{
        setFoods(data)
       })

  },[])
 
  const foodCard=foods.map((food)=>{
    return(
      <div className="food-card">
          <img  src={food.imageurl} alt="kuku"/>
          <h2>FoodType:{food.foodtype}</h2>
          <h2>Price : <span>Ksh {food.price}</span></h2>
          <NewComment />
          <button className="order-button" onClick={handleClick2}>{buttonText2}</button>
        </div>
    )
  })
  return (
    <div className="home_section">
      <h1 className="header">Tamaduni Dishes</h1>
        <nav>
            <Link to="">Home</Link>
            <Link to="about">About Us</Link>
            <Link to="offers">Offers</Link>
            <Link to="contacts">Contacts</Link>
        </nav>
       <p className="banner">Get Started with our delicious meals</p>
       <div className="suggest-food"><button>Suggest A Meal</button></div>
       <div className="food-section">
        {foodCard}

       </div>
       <hr />
       <footer>
        <FaTwitter className="twitter" />
        <FaFacebook className="facebook" />
        <FaInstagram className="instagram" />
        <p>Tamaduni dishes | All rights reserved 2022</p>
       </footer>  
    </div>
  )
}

export default Home
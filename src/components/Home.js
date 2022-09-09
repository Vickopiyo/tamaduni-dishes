import "../App.css"
import { Link } from "react-router-dom"
import {FaFacebook, FaInstagram,  FaTwitter} from "react-icons/fa"
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
  function handleDelete (id){
    fetch(`http://127.0.0.1:9292/foods/${id}`,{
      method: "DELETE",
    })
    .then(r => r.json())
    .then(() => {
      const deletion = foods.filter(food => food.id !== id )
      setFoods(deletion)
    })
  }
 
  const foodCard=foods.map((food)=>{
    return(
      <div className="food-card" key={food.id}>
          <img  src={food.imageurl} alt="kuku"/>
          <h2>FoodType:{food.foodtype}</h2>
          <h2>Price : <span>Ksh {food.price}</span></h2>
          <NewComment />
          <button className="order-button" onClick={()=>{
            handleDelete(food.id)
          }}>Ignore</button>
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
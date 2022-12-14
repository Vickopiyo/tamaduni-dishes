import "../App.css"
import { Link } from "react-router-dom"
import {FaFacebook, FaInstagram,  FaTwitter,FaLongArrowAltRight} from "react-icons/fa"
import React, {useState,useEffect} from 'react'
import NewComment from "./NewComment"

const Home = () => {
  const [buttonText, setButtonText] = useState('Order Now');
  const [buttonText2, setButtonText2] = useState('Order Now');
  const [buttonText3, setButtonText3] = useState('Order Now');
  const [foods,setFoods]=useState([])
  const [reviews,setReviews]=useState([])

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
    fetch("https://server-phase-3.herokuapp.com/foods")
       .then(r => r.json())
       .then(data =>{
        setFoods(data)
       })

  },[])
  useEffect(()=>{
    fetch("https://server-phase-3.herokuapp.com/reviews")
       .then(r => r.json())
       .then(data =>{
        setReviews(data)
       })

  },[])
  function handleDelete (id){
    fetch(`https://server-phase-3.herokuapp.com/foods/${id}`,{
      method: "DELETE",
    })
    .then(r => r.json())
    .then(() => {
      const deletion = foods.filter(food => food.id !== id )
      setFoods(deletion)
    })
  }
  const comments = reviews.map(
    review => {
      return (
        <p key={review.id}>{review.comment}</p>
      )
    }
  )
 
  const foodCard=foods.map((food)=>{
    return(
      <div className="food-card" key={food.id}>
          <img  src={food.imageurl} alt="kuku"/>
          <h2>FoodType:{food.foodtype}</h2>
          <h2>Price : <span>Ksh {food.price}</span></h2>
          {comments}
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
       <p className="banner">Get Started with our delicious meals<FaLongArrowAltRight /></p>
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
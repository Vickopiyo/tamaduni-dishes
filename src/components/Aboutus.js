import React from 'react'
import crew from "../images/crew.jpg"

const Aboutus = () => {
  return (
    <div>

  
    <div className='aboutus-description'>
      <img  src={crew} alt="Crew"   />
      <p>Tamaduni dishes is an online food delivery services company.However, we also have chains of physical restaurants in kenya where our customers can come and enjoy our fine cuisines.We have been in existence for the last twenty years.</p>
    </div>
    <h1>  we go extra mile for clients through:</h1>
    <div className='services'>
     
      <div className='service-card'>
        <img src='https://images.unsplash.com/photo-1524777313293-86d2ab467344?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80' alt="outside catering"/>
        <h2>OutSide Catering</h2>
        <p>We offer outside catering on demand <br />at very affordable rates</p>
        <p>From Ksh 15,000</p>
      </div>
      <div className='service-card'>
        <img src='https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' alt="outside catering"/>
        <h2>Online Food event</h2>
        <p>Let connect through our delicacies <br />from world over</p>
        <p>From Ksh 1000</p>
      </div>
      <div className='service-card'>
        <img src='https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt="outside catering"/>
        <h2>Cooking Lessons</h2>
        <p>Learn the art of cooking<br />at very affordable fees</p>
        <p>From Ksh 10000 per Month</p>
      </div>
    </div>
    </div>
  )
}

export default Aboutus
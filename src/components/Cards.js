import React from 'react'
import emailSvg from "../assets/email.svg";
import locationSvg from "../assets/location.svg";
import phoneSvg from "../assets/phone.svg";

const Cards = ({values,handleClick}) => {
   
     

    return ( <div className="container">
      <div className="card">
          
        <div className="user">
          <img
            style={{
              borderRadius: "50%",
              width: "200px",
              margin: " auto",
            }}
            src={values.large}
            alt={values.first}
          ></img>
          <h1>
            {values.title}. {values.first} {values.last}
          </h1>
        </div>
        <div className="mail">
          <img src={emailSvg} style={{}} alt={values.first}></img>
          <h2>{values.email}</h2>
        </div>
        <div className="tel">
          <img src={phoneSvg} style={{}} alt={values.phone}></img>
          <h2>{values.phone}</h2>
        </div>
        <div className="loc">
          <img src={locationSvg} style={{}} alt={values.city}></img>
          <h2>
            {values.city} - {values.country}
          </h2>
        </div>
        <p className="age">Age: {values.age}</p>
        <p className="date">Register Date: {values.date}</p>
      </div>
      <button className="btn" onClick={handleClick}>
        Random User
      </button>
    </div>);
       
    
}

export default Cards

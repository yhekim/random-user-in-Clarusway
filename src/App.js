import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import Cards from "./components/Cards";

function App() {
  const [card, setCard] = useState([]);
  const { email, title, first, last, phone, city, country, date, age, large } =
    card;
  const url = "https://randomuser.me/api/";

  const cardData = async () => {
    const res = await axios.get(url);
    const info = await res.data.results[0];
    const {
      email,
      name: { title, first, last },
      phone,
      location: { city, country },
      dob: { date, age },
      picture: { large },
    } = info;
    setCard({
      email,
      title,
      first,
      last,
      phone,
      city,
      country,
      date: date.substring(0, 10),
      age,
      large,
    });
  };

  useEffect(() => {
    cardData();
  }, []);

  console.log(card);

  const handleClick = () => {
    window.location.reload(true);
  };
  const value={
    email,
    title,
    first,
    last,
    phone,
    city,
    country,
    date,
    age,
    large,

  }

  return (
    <div className="container">
     <Cards values={value} handleClick={handleClick}/>
    </div>
  );
}

export default App;

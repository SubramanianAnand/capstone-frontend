import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "../styles/Home.css";
import axios from "axios";
import API_URL from "../../config/global";
import Navbar from "./Navbar";
import WhyUs from "./WhyUs";
import Working from "./Working";
import Contact from "./Contact";
import Footer from "./Footer";
import CarouselComp from "./CarouselComp";
import OrderServices from "./OrderServices";
import OrderBooking from "./OrderBooking";

const Home = () => {
  const [res, setRes] = useState({});
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (user && user.token) {
      getData(user.token);
    }
  }, []);

  const getData = async (token) => {
    try {
      const config = {
        headers: {
          Authorization: token,
        },
      };
      const response = await axios.get(`${API_URL}/home`, config);
      console.log(response);

      if (response.data === "Invalid Token") {
        alert("login again");
      } else if (response.data === "Server busy") {
        alert("Unauthorised access");
      } else if (response?.status) {
        setRes(response.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="home">
      <Navbar />

      <CarouselComp />
      
      <br />
      <br />
      <OrderServices />
      <br />
      <br />
      <OrderBooking />
      <Footer />
    </div>
  );
};

export default Home;

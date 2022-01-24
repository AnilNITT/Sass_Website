import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "../navigation/Navbar";
import Home from "../home/Home";
import Accomodation from "../accomodation/Accomodation";
import Activities from "../activities/Activities";
import Contact from "../contact/Contact";
import Bookings from "../bookings/Bookings";
import Footer from "../footer/Footer";
import NotFound from "../notFound/NotFound";

const App = () => {
  return (
    <div className="App container-fluid p-0">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/accomodation" element={<Accomodation/>} />
        <Route path="/activities" element={<Activities/>} />
        <Route path="/bookings" element={<Bookings/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route component={NotFound} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
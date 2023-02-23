import React from "react";
import { About, Header, Footer, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components";
import './App.scss';

const App = () => {
  return(
  <div className="app">
    <Navbar></Navbar>
    <Header></Header>
    <About></About>
    <Work></Work>
    <Skills></Skills>
    <Testimonial></Testimonial>
    <Footer></Footer>
  </div>
  )
};

export default App;

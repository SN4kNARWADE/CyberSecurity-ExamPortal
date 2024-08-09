import React from "react";

// this 2 bootstrap css and js link
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

// import all components
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contactus from "./components/Contactus";
import Aboutus from "./components/Aboutus";
import Navbar from "./components/Navbar";
import GotoTest from "./components/GotoTest";
import Signup from './components/Signup';
import Login from "./components/Login";
// import Footer from "./components/Footer";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css"


const App = () => {
   useEffect(() => {
  Aos.init();
  
 }, [])
 
  return (

    
    <>
   
  
      <Navbar />
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/signup" element={<Signup/>} />
         <Route path="/login" element={<Login/>} />
          <Route path="/gototest" element={<GotoTest/>} />
      </Routes>
       {/* <Footer/> */}
    </>
  );
};
export default App;

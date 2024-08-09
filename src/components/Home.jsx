import React from "react";
import { useLocation } from 'react-router-dom';
import Footer from "./Footer";

const Home = () => {
    const location = useLocation();
    const userId = location.state?.id; 

    return (
        <div className="container home" id="home">
     <h1>Let's take a step toward being aware!!<br/>Stay away from fraud!!</h1>

            <div className="content">

                <div className="left">
                    <h2>Our Vision</h2>
                    <p>Motive: To raise awareness</p>
                    <p>Will Do: Train regarding cyber security</p>
                    <p>Certification: After completion</p>
                </div>
                <div className="right">
                    <div className="img">
                        <img src={`/assets/cw.png`} alt="hero" />
                    </div>
                </div>
            </div>
            <Footer componentName="Home"/>
        </div>
    );
};

export default Home;

import React, { useRef, useEffect } from "react";
import Typed from "typed.js";
import skillsData from "../data/skills.json";

//  This is an about us page

const AboutUs = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
                "Welcome to our cybersecurity awareness program",
                "Learn about cyber threats and stay safe online",
                "Protect your personal and sensitive information",
                "Join us in creating a safer cyber environment",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home" id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef}></h1>
        </div>
        <div className="right">
          <div
            className="img"
            data-aos="fade-up-left"
            data-aos-duration="1000"
          >
            <img src={`/assets/cyber_images.jpg`} alt="hero" />
          </div>
        </div>
      </div>

      <div className="container skills" id="skills">
        <h1>Our Team</h1>
        <div className="items">
          {skillsData.map((data, index) => (
            <div
              className="item"
              key={index}
              data-aos="flip-left"
              data-aos-duration="1000"
            >
              <img src={`/assets/${data.imageSrc}`} alt="" />
              <h3>{data.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutUs;

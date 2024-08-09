import React, { useState } from "react";

const questions = {
  english: [
    "https://docs.google.com/forms/d/e/1FAIpQLSedz_dV8m73UdSclHsI3f-ToclFC_m15zwz07xb5qXgs_OU4g/viewform?usp=sf_link",
    "https://docs.google.com/forms/d/e/1FAIpQLScRCPbu4t8ng2K-0xs597c-e7euvQyGz7-QSEsj1KWO5Q4yzA/viewform?usp=sf_link",
    "https://docs.google.com/forms/d/e/1FAIpQLSf0FeOiXsmEVZLYl9geubpVpMwb8jcOHuOmvwLIekxjkvhp4g/viewform?usp=sf_link",
    "https://docs.google.com/forms/d/e/1FAIpQLSc0G-P85OmTRJ_u3P2syJ9dqLsDrNU3PWE2U9eFV-Nn0AXNqg/viewform?usp=sf_link",
  ],
  marathi: [
    "https://docs.google.com/forms/d/e/1FAIpQLSfvCsavvZ8bqAIiB80LX_f_q_hgK5dqXzxOHDJ1f60Nqo_Nvg/viewform?usp=sf_link",
    "https://docs.google.com/forms/d/e/1FAIpQLSdXv7wZEJtuWaUYjq5By4gL_Vo_JsM0xL2MAGzZjX0slT4wxQ/viewform?usp=sf_link",
    "https://docs.google.com/forms/d/e/1FAIpQLSdf64lTTYRD9pKgbPe44L2NXxVG0wSXd32_GJdpZxMzPHrHUA/viewform?usp=sf_link",
    "https://docs.google.com/forms/d/e/1FAIpQLSeUyIwQHI_bIl-qX9yvgdMsTJUhryOAFyfpL6Afb0FhEKerxg/viewform?usp=sf_link",
  ],
  hindi: [
    "https://docs.google.com/forms/d/e/1FAIpQLSfJjxKnA5Q17qlygwTlhFy7Y1wn0CaTmF69qLJdoFydy874uA/viewform?usp=sf_link",
    "https://docs.google.com/forms/d/e/1FAIpQLSfCljXNHjyXwTA3kwxq_Jxy41XtRMOg8jeiPFcpnL_csz6QiA/viewform?usp=sf_link",
    "https://docs.google.com/forms/d/e/1FAIpQLSdsTjGJmi_B06nt5bCXunDUoom0Yb4B7xvJ6wMAnulD1gHN4Q/viewform?usp=sf_link",
    "https://docs.google.com/forms/d/e/1FAIpQLSdQNNjq0-766kUzvD0xc54s_ovA3bpSDfg6EMBEdlOUakcg6A/viewform?usp=sf_link",
  ],
};

// stating Page

const HomePage = () => (
  <div>
  <br/>
    <h2>Welcome to the Exam Page!</h2>
    <p>Please select a language to start the exam.</p>
    
    <h2>!!. Some Instruction !!.</h2>
    <p>"starting the exam, write your full name and read the entire story carefully. Then, answer the questions correctly. If you score above 70%, you will receive a certificate. Everyone, enjoy the story!"</p>
    <h3>All The Best !!.</h3>
  </div>
);

// Next Page

const ExamPage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };

  const handleNextQuestion = () => {
    console.log("Moving to next question...");
  };

  return (
    <div className="container">
      <h1>Choose Language</h1>
      <button className="btn" onClick={() => handleLanguageSelect("english")}>English</button>
      <button className="btn" onClick={() => handleLanguageSelect("marathi")}>Marathi</button>
      <button className="btn" onClick={() => handleLanguageSelect("hindi")}>Hindi</button>

      {selectedLanguage ? (
        <>
          <h2>{selectedLanguage.toUpperCase()}</h2>
          <iframe
            src={questions[selectedLanguage][0]}
            width="100%"
            height="500px"
            title="Google Form"
          ></iframe>
        </>
      ) : (
        <HomePage />
      )}
    </div>
  );
};

export default ExamPage;

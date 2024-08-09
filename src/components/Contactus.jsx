// import React, { useState } from "react";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your form submission logic here
//     console.log(formData);
//   };

//   return (
//     <div className="contact-form-container">
//       <h2>Contact Us</h2>
//       <form className="contact-form" onSubmit={handleSubmit}>
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <label htmlFor="message">Message:</label>
//         <textarea
//           id="message"
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           required
//         ></textarea>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;

// This is an Contact us Page 

import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill out all fields.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3001/contactus", formData);
      console.log("Form submitted:", res.data);
      setIsSubmitted(true);
      setTimeout(() => {
        window.location.href = "/"; 
      }, 2000); 
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      {isSubmitted ? (
        <p>Thank you for your message! Redirecting to home page...</p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          {error && <p className="error-message">{error}</p>}
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;

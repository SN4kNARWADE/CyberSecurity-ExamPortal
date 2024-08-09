// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";

// function Signup() {
//     const history = useNavigate();

//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");
//     const [dob, setDOB] = useState("");
//     const [mobileNo, setMobileNo] = useState("");
//     const [education, setEducation] = useState("");
//     const [college, setCollege] = useState("");
//   const [alertMessage, setAlertMessage] = useState("");

//    async function submit(e) {
//     e.preventDefault();

//     try {
//         const res = await axios.post("http://localhost:3000/signup", {
//             name,
//             email,
//             password,
//             confirmPassword,
//             dob,
//             mobileNo,
//             education,
//             college,
//         });

//         if (res.data === "exist") {
//             alert("User already exists");
//         } else if (res.data === "notexist") {
//             setAlertMessage("Registration successful! Please login.");
//             history("/login");
//         }
//     } catch (e) {
//         alert("Wrong details");
//         console.log(e);
//     }
// }


//     return (
//         <div className="signup">
//             <h1>Signup</h1>
//             <form action="POST">
//                 <input
//                     type="text"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     placeholder="Name"
//                 />
//                 <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="Email"
//                 />
//                 <input
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder="Password"
//                 />
//                 <input
//                     type="password"
//                     value={confirmPassword}
//                     onChange={(e) => setConfirmPassword(e.target.value)}
//                     placeholder="Confirm Password"
//                 />
//                 <input
//                     type="date"
//                     value={dob}
//                     onChange={(e) => setDOB(e.target.value)}
//                     placeholder="Date of Birth"
//                 />
//                 <input
//                     type="text"
//                     value={mobileNo}
//                     onChange={(e) => setMobileNo(e.target.value)}
//                     placeholder="Mobile No"
//                 />
//                 <input
//                     type="text"
//                     value={education}
//                     onChange={(e) => setEducation(e.target.value)}
//                     placeholder="Education"
//                 />
//                 <input
//                     type="text"
//                     value={college}
//                     onChange={(e) => setCollege(e.target.value)}
//                     placeholder="College Name"
//                 />
//                 <input type="submit" onClick={submit} />
//             </form>
//             {alertMessage && <p>{alertMessage}</p>}
//             <p>You are Register!</p>
//             <Link to="/login">Login Now</Link>
//         </div>
//     );
// }

// export default Signup;



import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { set } from "mongoose";

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [dob, setDOB] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [education, setEducation] = useState("");
    const [college, setCollege] = useState("");
    const [alertMessage, setAlertMessage] = useState("");

    // This is Register Section, use try catch

    async function submit(e) {
        e.preventDefault();

          setName('');
          setEmail('');
          setPassword('');
          setConfirmPassword('');
          setDOB('');
          setMobileNo('');
          setEducation('');
          setCollege('');



        try {
            const res = await axios.post("http://localhost:3001/signup", {
                name,
                email,
                password,
                confirmPassword,
                dob,
                mobileNo,
                education,
                college,

            },{headers:{"Content-Type":"application/json"}}
            );

            //  Check user exist or not
            console.log(res.data);
            if (res.data === "exist") {
                alert("User already exists");
            } else if (res.data === "notexist") {
                setAlertMessage("Registration successful! Please login.");
            }
        } catch (e) {
            alert("An error occurred. Please try again.");
            console.error(e);
        }
    }

    return (
        <div className="signup">
            <h1>Signup</h1>
            <form onSubmit={submit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    required
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                    required
                />
                <input
                    type="date"
                    value={dob}
                    onChange={(e) => setDOB(e.target.value)}
                    placeholder="Date of Birth"
                    required
                />
                <input
                    type="text"
                    value={mobileNo}
                    onChange={(e) => setMobileNo(e.target.value)}
                    placeholder="Mobile No"
                    required
                />
                <input
                    type="text"
                    value={education}
                    onChange={(e) => setEducation(e.target.value)}
                    placeholder="Education"
                    required
                />
                <input
                    type="text"
                    value={college}
                    onChange={(e) => setCollege(e.target.value)}
                    placeholder="College Name"
                    required
                />
                <button type="submit">Submit</button>
            </form>
            {alertMessage && <p>{alertMessage}</p>}
            <p>You are Registered!</p>
            <Link to="/login">Login Now</Link>
        </div>
    );
}

export default Signup;


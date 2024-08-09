import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
    const history = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function submit(e) {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:3001/", {
                email,
                password
            });

            if (res.data === "exist") {
                history("/GotoTest", { state: { id: email } });
            } else if (res.data === "notexist") {
                alert("User is not registered");
            }
        } catch (e) {
            alert("Something went wrong. Please try again.");
            console.error(e);
        }
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={submit}>
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
                <button type="submit">Login</button>
            </form>
            <p>You are not registered?</p>
            <Link to="/signup">Register now</Link>
        </div>
    );
}

export default Login;

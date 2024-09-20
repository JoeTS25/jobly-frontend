import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../auth/UserContext";
import "./Home.css";

function Home() {
    const { currentUser } = useContext(UserContext);

    return (
        <div className="Home">
            <h1>Jobly</h1>
            {currentUser ? 
                <h2>Hello {currentUser.firstName}!</h2>
            : (
                <p>
                    <Link to="/login">Log In</Link>
                    <Link to="/signup">Sign Up</Link>
                </p>
            )}
        </div>
    );
}

export default Home;
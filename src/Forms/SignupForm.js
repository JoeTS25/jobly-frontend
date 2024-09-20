import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignupForm({ signup }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
    });
    const [formErrors, setFormErrors] = useState([]);

    async function handleSubmit(evt) {
        evt.preventDefault();
        let result = await signup(formData);
        if (result.success) {
            // if the signup works, redirect to companies page
            navigate.push("/companies");
        } else {
            setFormErrors(result.errors);
        }
    }

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(data => ({ ...data, [name]: value}));
    }

    return (
        <div className="SignupForm">
            <h2>Sign Up</h2>
            <div className="form-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input 
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input 
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>  

                      <div className="form-group">
                        <label>First Name</label>
                        <input 
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </div>    

                      <div className="form-group">
                        <label>Last Name</label>
                        <input 
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </div> 

                      <div className="form-group">
                        <label>Email</label>
                        <input 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>   

                    <button type="submit"
                            onSubmit={handleSubmit}>Submit</button>          

                </form>
            </div>

        </div>
    );
}

export default SignupForm;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm({ login }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const [formErrors, setFormErrors] = useState([]);

    async function handleSubmit(evt) {
        evt.preventDefault();
        let result = await login(formData);
        if (result.success) {
            navigate.push("/companies");
        } else {
            setFormErrors(result.errors);
        }
    }

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(log => ({ ...log, [name]: value }));
    }

    return (
        <div className="LoginForm">
            <h2>Login</h2>
            <div className="form-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input 
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input 
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div> 

                    <button type="submit"
                            onSubmit={handleSubmit}>Submit</button>  

                </form>
            </div>

        </div>
    )
}

export default LoginForm;
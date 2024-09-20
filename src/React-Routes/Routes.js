import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home";
import Companies from "../Companies/Companies";
import CompanyDetails from "../Companies/CompanyDetails";
import Jobs from "../Jobs/Jobs";
import LoginForm from "../Forms/LoginForm";
import SignupForm from "../Forms/SignupForm";
import Profile from "../Forms/Profile";
import PrivateRoute from "./PrivateRoute";

function RouteList(login, signup) {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<LoginForm login={login}/>}></Route>
            <Route path="/signup" element={<SignupForm signup={signup}/>}></Route>
            <Route path="/companies" element={<PrivateRoute> <Companies /> </PrivateRoute>}></Route>
            <Route path="/companies/:name" element={<PrivateRoute> <CompanyDetails /> </PrivateRoute>}></Route>
            <Route path="/jobs" element={<PrivateRoute> <Jobs /> </PrivateRoute>}></Route>
            <Route path="/profile" element={<PrivateRoute> <Profile /> </PrivateRoute>}> </Route>
            <Route path="/*" element={<Navigate to="/"/>} />
        </Routes>
    )
}

export default RouteList;
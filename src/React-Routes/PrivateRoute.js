import React, { useContext } from "react";
import { Route, useNavigate } from "react-router-dom";
import UserContext from "../auth/UserContext";

function PrivateRoute({ exact, path, children }) {
    const { currentUser } = useContext(UserContext);
    const navigate = useNavigate();

    if (!currentUser) {
        navigate('/login')
    }

    return (
        <Route exact={exact} path={path}>{children}</Route>
    );
}

export default PrivateRoute;
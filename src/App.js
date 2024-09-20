import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./React-Routes/Routes";
import JoblyApi from "./api/api";
import UserContext from "./auth/UserContext";
import UselocalStorage from "./Hooks/useLocalStorage";
import jwt, { sign } from "jsonwebtoken";
import Nav from "./React-Routes/Nav";

export const TOKEN_STORAGE_ID = "my-token"


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [appIds, setAppIds] = useState(new Set([]));
  const [token, setToken] = UselocalStorage(TOKEN_STORAGE_ID);

  useEffect(function loadUserInfo() {
    async function getCurrentUser() {
      if (token) {
        try {
          let { username } = jwt.decode(token);
          JoblyApi.token = token;
          let currentUser = await JoblyApi.getCurrentUser(username);
          setCurrentUser(currentUser);

        } catch (err) {
          console.error(err);
          setCurrentUser(null);
        }
      }
    }
    getCurrentUser();
  }, [token]);


  async function signup(signupData) {
    try {
      let token = await JoblyApi.signup(signupData);
      setToken(token);
      return { success: true };
    } catch (err) {
      console.error(err);
      return { success: false, err};
    }
  }

  async function login(loginData) {
    try {
      let token = await JoblyApi.login(loginData);
      setToken(token);
      return { success: true };
    } catch (err) {
      console.error(err);
      return { success: false, err };
    }
  }

  function hasAppliedToJob(id) {
    return appIds.has(id);
  }

  function applyToJob(id) {
    if (hasAppliedToJob(id)) return;
    JoblyApi.applyToJob(currentUser.username, id);
    setAppIds(new Set([...appIds, id]));
  }

  function logout() {
    setCurrentUser(null);
    setToken(null);
  }

  return (
    <div className="App">
      <UserContext.Provider value={{ currentUser, setCurrentUser, hasAppliedToJob, applyToJob}}>
        <div>
          <Nav logout={logout}/>
          <Routes login={login} signup={signup} />
        </div>
      </UserContext.Provider>
    </div>
  )
}

export default App;

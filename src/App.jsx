import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Login from "./layout/Login/Login";
import Register from "./layout/Register/Register";
import Home from "./layout/Home/Home";
import isAuth from "./util/isAuth";
import Main from "./layout/Main/Main";
import NewProject from "./layout/NewProject/NewProject";

function App() {
  const isLogin = isAuth() != null;

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/new-project"
            element={isLogin ? <NewProject /> : <Navigate to={"/login"} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/home"
            element={isLogin ? <Home /> : <Navigate to={"/login"} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;

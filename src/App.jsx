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
import About from "./layout/About/About";
import Directory from "./layout/Directory/Directory";
import Alliance from "./layout/Alliance/Alliance";
import Profile from "./layout/Profile/Profile";
import NewProject from "./layout/NewProject/NewProject";
import Explore from "./layout/Explore/Explore";
import ErrorView from "./layout/Error/ErrorView";
import MyProjects from "./layout/MyProjects/MyProjects";
import ProjectActivity from "./layout/ProjectActivity/ProjectActivity";
import ProjectFeed from "./layout/ProjectFeed/ProjectFeed";

function App() {
  const isLogin = isAuth() != null;

  return (
    <>
      <NexusProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/profile"
              element={isLogin ? <Profile /> : <Navigate to={"/login"} />}
            />
            <Route path="/directory" element={<Directory />} />
            <Route
              path="/new-project"
              element={isLogin ? <NewProject /> : <Navigate to={"/login"} />}
            />
            <Route
              path="/my-projects"
              element={isLogin ? <MyProjects /> : <Navigate to={"/login"} />}
            />
            <Route
              path="/add-activity"
              element={
                isLogin ? <ProjectActivity /> : <Navigate to={"/login"} />
              }
            />
            <Route
              path="/add-activity"
              element={
                isLogin ? <ProjectActivity /> : <Navigate to={"/login"} />
              }
            />
            <Route
              path="/explore"
              element={isLogin ? <Explore /> : <Navigate to={"/login"} />}
            />
            <Route
              path="/explore/:idProject"
              element={
                isLogin ? <ProjectDetails /> : <Navigate to={"/login"} />
              }
            />
            <Route
              path="/feed"
              element={isLogin ? <ProjectFeed /> : <Navigate to={"/login"} />}
            />
            <Route
              path="/about"
              element={isLogin ? <About /> : <Navigate to={"/login"} />}
            />
            <Route path="/alliance" element={<Alliance />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/home"
              element={isLogin ? <Home /> : <Navigate to={"/login"} />}
            />
            <Route path="*" element={<ErrorView />} />
          </Routes>
        </Router>
      </NexusProvider>
    </>
  );
}
export default App;

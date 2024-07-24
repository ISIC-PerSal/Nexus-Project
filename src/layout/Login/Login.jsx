<<<<<<< HEAD
import React, { useState } from 'react'
import LoginView from './LoginView'
import fetchLogin from '../../util/user/fetchLogin';
import NavbarGuest from '../../components/Navbar/NavbarGuest';
=======
import React, { useState } from "react";
import LoginView from "./LoginView";
import fetchLogin from "../../util/user/fetchLogin";
>>>>>>> 0bc403436f8d6eb448ebe6605fa848e56f26fa8c

function Login() {
  sessionStorage.clear();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    const body = {
      email: email,
      password: password,
    };
    console.log(body);
    try {
      const data = await fetchLogin(body);
      if (data.id_user) {
        sessionStorage.setItem("id_user", data.id_user);
        sessionStorage.setItem("email", data.email);
        window.location = "/home";
      } else {
        console.log(data);
      }
    } catch (error) {}
  }
  return (
<<<<<<< HEAD
    <>
    <NavbarGuest/>
      <LoginView
      email={email} 
      setEmail={setEmail} 
      password={password} 
      setPassword={setPassword} 
      handleLogin={handleLogin} />
    </>
=======
    <LoginView
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleLogin={handleLogin}
    />
>>>>>>> 0bc403436f8d6eb448ebe6605fa848e56f26fa8c
  );
}

export default Login;

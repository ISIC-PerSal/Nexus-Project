import React, { useState } from 'react'
import LoginView from './LoginView'
import fetchLogin from '../../util/user/fetchLogin';
import NavbarGuest from '../../components/Navbar/NavbarGuest';

function Login() {
  sessionStorage.clear();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(event) {
    event.preventDefault()
    const body = {
      email: email,
      password: password,
    };
    try {
      const data = await fetchLogin(body);
      if(data.id_user){
        sessionStorage.setItem("id_user", data.id_user)
        sessionStorage.setItem("email", data.email)
        window.location="/home";

      }else{

      }
    } catch (error) { }
  }
  return (
    <>
      <NavbarGuest />
      <LoginView
      email={email} 
      setEmail={setEmail} 
      password={password} 
      setPassword={setPassword} 
      handleLogin={handleLogin} />
    </>
  );
}

export default Login;

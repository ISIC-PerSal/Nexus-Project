import React, { useState } from "react";
import RegisterView from "./RegisterView";
import fetchRegister from "../../util/user/fetchRegister";
import NavbarGuest from '../../components/Navbar/NavbarGuest';

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    const body = {
      email: email,
      password: password,
    };
    console.log(body);
    try {
      const data = await fetchRegister(body);
      console.log(data);
    } catch (error) {}
  }

  return (
<<<<<<< HEAD
   <>
   <NavbarGuest/>
   <RegisterView 
   email={email} 
   setEmail={setEmail} 
   password={password} 
   setPassword={setPassword} 
   handleRegister={handleRegister}/>
   </>
=======
    <RegisterView
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleRegister={handleRegister}
    />
>>>>>>> 0bc403436f8d6eb448ebe6605fa848e56f26fa8c
  );
}

export default Register;

import React, { useState } from "react";
import RegisterView from "./RegisterView";
import fetchRegister from "../../util/user/fetchRegister";

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
    <RegisterView
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleRegister={handleRegister}
    />
  );
}

export default Register;

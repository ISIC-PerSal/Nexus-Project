import React, { useState } from "react";
import LoginView from "./LoginView";
import fetchLogin from "../../util/user/fetchLogin";
import Swal from "sweetalert2";
import Navbar from "../../components/Navbar/Navbar";

function Login() {
  sessionStorage.clear();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(event) {
    event.preventDefault();
    if (email.trim() != "" && password != "") {
      const body = {
        email: email,
        password: password,
      };
      try {
        const data = await fetchLogin(body);
        if (data.id_user) {
          sessionStorage.setItem("id_user", data.id_user);
          sessionStorage.setItem("email", data.email);
          sessionStorage.setItem("name", data.name);
          sessionStorage.setItem("lastName", data.lastName);
          sessionStorage.setItem("birthday", data.birthday);
          sessionStorage.setItem("age", data.age);
          sessionStorage.setItem("password", data.password);
          sessionStorage.setItem("rfc", data.rfc);
          sessionStorage.setItem("clabe", data.clabe);
          window.location = "/home";
        } else {
          Swal.fire({
            title: "Error!",
            text: "Revise sus credenciales",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      } catch (error) {}
    } else {
      Swal.fire({
        title: "Datos incompletos",
        text: "Llene todo los datos",
        icon: "question",
      });
    }
  }
  return (
    <>
      <Navbar />
      <LoginView
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
      />
    </>
  );
}

export default Login;

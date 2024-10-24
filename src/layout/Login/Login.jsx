import React, { useEffect, useState } from "react";
import LoginView from "./LoginView";
import fetchLogin from "../../util/user/fetchLogin";
import Swal from "sweetalert2";
import Navbar from "../../components/Navbar/Navbar";
import fetchGetProjectsJoined from "../../util/project/fetchGetProjectsJoined";
import { useNexusContext } from "../../Hooks/useNexusContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const {
    changeNavbarItem,
    userId,
    updateUserId,
    updateUserType,
    updateUserData,
  } = useNexusContext();

  useEffect(() => {
    changeNavbarItem("Yo");
  }, [changeNavbarItem]);

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
          updateUserId(data.id_user);
          updateUserType(data.type);
          sessionStorage.setItem("id_user", data.id_user);
          sessionStorage.setItem("email", data.email);
          sessionStorage.setItem("name", data.name);
          sessionStorage.setItem("lastName", data.lastName);
          sessionStorage.setItem("birthday", data.birthday);
          sessionStorage.setItem("age", data.age);
          sessionStorage.setItem("password", data.password);
          sessionStorage.setItem("rfc", data.rfc);
          sessionStorage.setItem("clabe", data.clabe);
          sessionStorage.setItem("type", data.type);
          updateUserData(data.name, "name");
          updateUserData(data.lastName, "lastName");
          updateUserData(data.birthday, "birthday");
          updateUserData(data.age, "age");
          updateUserData(data.rfc, "rfc");
          updateUserData(data.clabe, "clabe");
          const dataProjects = await fetchGetProjectsJoined(data.id_user);
          if (dataProjects) {
            sessionStorage.setItem(
              "projects_joined",
              JSON.stringify(dataProjects)
            );
          }
          navigate("/home");
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

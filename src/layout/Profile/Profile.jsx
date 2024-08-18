import React, { useState } from "react";
import ProfileView from "./ProfileView";
import NavbarView from "../../components/Navbar/NavbarView";
import calcularEdad from "../../util/user/calcularEdad";
import Swal from "sweetalert2";

function Profile() {
  const [name, setName] = useState(sessionStorage.getItem("name"));
  const [lastName, setLastName] = useState(sessionStorage.getItem("lastName"));
  const [email, setEmail] = useState(sessionStorage.getItem("email"));
  const [birthday, setBirthday] = useState(sessionStorage.getItem("birthday"));
  const [age, setAge] = useState(sessionStorage.getItem("age"));
  const [password, setPassword] = useState(sessionStorage.getItem("password"));
  const [rfc, setRfc] = useState(sessionStorage.getItem("rfc"));
  const [clabe, setClabe] = useState(sessionStorage.getItem("clabe"));

  async function updateUser(e) {
    e.preventDefault();
    const body = {
      idUser: sessionStorage.getItem("id_user"),
      name: name,
      lastName: lastName,
      email: email,      
      password: password,
      birthday: birthday,
      age: calcularEdad(birthday),
      rfc: rfc,
      clabe: clabe,
    };
    try {
      const data = await fetchUpdate(body);
      if (data.status == "Done") {
        sessionStorage.setItem("id_user", body.id_user);
        sessionStorage.setItem("email", body.email);
        sessionStorage.setItem("name", body.name);
        sessionStorage.setItem("lastName", body.lastName);
        sessionStorage.setItem("birthday", body.birthday);
        sessionStorage.setItem("age", body.age);
        sessionStorage.setItem("password", body.password);
        sessionStorage.setItem("rfc", body.rfc);
        sessionStorage.setItem("clabe", body.clabe);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Los datos se han actualizados",
          showConfirmButton: false,
          timer: 1000,
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "Ocurrio un error",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Ocurrio un error",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  }

  return (
    <>
      <NavbarView />
      <ProfileView
        name={name}
        setName={setName}
        lastName={lastName}
        setLastName={setLastName}
        email={email}
        setEmail={setEmail}
        birthday={birthday}
        setBirthday={setBirthday}
        age:calcularEdad={birthday}
        password={password}
        setPassword={setPassword}
        rfc={rfc}
        setRfc={setRfc}
        clabe={clabe}
        setClabe={setClabe}
        updateUser={updateUser}
      />
    </>
  );
}

export default Profile;

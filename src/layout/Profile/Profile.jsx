import React, { useState } from "react";
import ProfileView from "./ProfileView";
import NavbarView from "../../components/Navbar/NavbarView";
import calcularEdad from "../../util/user/calcularEdad";

function Profile() {
  const [name, setName] = useState(sessionStorage.getItem("name"));
  const [lastName, setLastName] = useState(sessionStorage.getItem("lastName"));
  const [email, setEmail] = useState(sessionStorage.getItem("email"));
  const [birthday, setBirthday] = useState(sessionStorage.getItem("birthday"));
  const [age, setAge] = useState(sessionStorage.getItem("age"));
  const [password, setPassword] = useState(sessionStorage.getItem("password"));
  const [rfc, setRfc] = useState(sessionStorage.getItem("rfc"));
  const [clabe, setClabe] = useState(sessionStorage.getItem("clabe"));

  function updateUser(e) {
    e.preventDefault();
    const body = {
      idUser: sessionStorage.getItem("id_user"),
      name: name,
      lastName: lastName,
      email: email,
      birthday: birthday,
      age: calcularEdad(birthday),
      rfc: rfc,
      clabe: clabe,
    };
    console.log(body);
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
        age={age}
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

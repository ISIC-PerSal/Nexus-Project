import React, { useState } from 'react'
import ProfileView from './ProfileView'
import Navbar from '../../components/Navbar/Navbar'
import calcularEdad from '../../util/user/calcularEdad'
function Profile() {
  const [name, setName] = useState(sessionStorage.getItem("name"))
  const [lastName, setlastName] = useState(sessionStorage.getItem("lastName"))
  const [email, setEmail] = useState(sessionStorage.getItem("email"))
  const [password, setPassword] = useState(sessionStorage.getItem("password"))
  const [birthday, setBirthday] = useState(sessionStorage.getItem("birthday"))
  const [age, setAge] = useState(sessionStorage.getItem("age"))
  const [rfc, setRfc] = useState(sessionStorage.getItem("rfc"))
  const [clabe, setClabe] = useState("null")

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
      clabe: clabe
    };
    console.log(body)
  }
  return (
    <>
      <Navbar />
      <ProfileView
        name={name}
        setName={setName}
        lastName={lastName}
        setlastName={setlastName}
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
  )
}

export default Profile
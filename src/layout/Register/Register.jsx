import React, { useState } from 'react'
import RegisterView from './RegisterView';
import fetchRegister from "../../util/user/fetchRegister";
import NavbarGuest from '../../components/Navbar/NavbarGuest';
import Swal from "sweetalert2";


function calcularEdad(fecha) {
    let hoy = new Date();
    let fechaNacimiento = new Date(fecha);
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth();
    if (
        diferenciaMeses < 0 ||
        (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
    ) {
        edad--;
    }
    return edad;
}
function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [fechaNac, setFechaNac] = useState("");

    async function handleRegister(event) {
        event.preventDefault()
        const edad = calcularEdad(fechaNac)
        if (
            email != "" &&
            password != "" &&
            nombre != "" &&
            apellido != "" &&
            fechaNac != ""
          ) {
            const body = {
              email: email,
              password: password,
              name: nombre,
              lastName: apellido,
              birthday: fechaNac,
              age: edad,
            };
            console.log(body);
            try {
              const data = await fetchRegister(body);
      if (data.status == "Creado") {
        Swal.fire({
            title: "Exito!",
            text: "Cuenta registrada. Inicie sesión!",
            icon: "success",
            confirmButtonText: "Ir a inicio de sesión",
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "/login";
            }
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
            <NavbarGuest />
            <RegisterView
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                nombre={nombre}
                setNombre={setNombre}
                apellido={apellido}
                setApellido={setApellido}
                fechaNac={fechaNac}
                setFechaNac={setFechaNac}
                handleRegister={handleRegister} />
        </>
    );
}

export default Register
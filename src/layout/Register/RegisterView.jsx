import React, { useState } from 'react'

const getDataApi = async (url, body) => {
    try {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        }
        if (body) {
            options.body = JSON.stringify(body)
        }
        const response = await fetch(url, options)

        if (!response.ok) {
            throw new Error("Error en la petición")
        }

        const json = await response.json()
        return json

    } catch (error) {
        console.error("Error:", error.message)
        return null
    }
};
function RegisterView({email, setEmail, password, setPassword, handleRegister}) {

    return (
        <>
            <div className="bg-info vw-100 vh-100 d-flex justify-content-center align-items-center">
                <main className="border bg-white w-50 h-50 p-5 rounded">
                    <form>
                        <h1>Registro</h1>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Usuario</label>
                            <input
                                type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            ></input>

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            ></input>
                        </div>
                        <button onClick={(event)=>handleRegister(event)}
                            type="submit" className="btn btn-primary">
                            Regístrate
                        </button>

                    </form>
                    <a href="/login">
                    Ir a inicio de sesión
                    </a>
                </main>
            </div>
        </>
    );
}

export default RegisterView
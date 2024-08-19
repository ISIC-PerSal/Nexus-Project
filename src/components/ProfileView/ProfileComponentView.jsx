import React from 'react'
import profile from "../../assets/profile.jpg";
function ProfileComponentView({name, lastName, email, birthday, age}) {
    return (
        <>
            <div className="container w-50 mt-3 p-3 border rounded border-secondary-subtle bg-gral me-4">
                <div className="d-flex justify-content-center w-100">
                    <img
                        className="w-50 border border-secondary-subtle rounded-circle"
                        src={profile}
                        alt=""
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="nameUser" class="form-label">
                        Nombre completo
                    </label>
                    <input  disabled={true} type="text" class="form-control" id="nameUser" value={`${name} ${lastName}`}></input>
                </div>
                <div class="mb-3">
                    <label htmlFor="emailUser" class="form-label">
                        Correo
                    </label>
                    <input disabled={true} type="email" class="form-control" id="emailUser" value={`${email}`}></input>
                </div>
                <div class="mb-3">
                    <label htmlFor="birthdayUser" class="form-label">
                        Fecha de nacimiento
                    </label>
                    <input disabled={true} type="date" class="form-control" id="birthdayUser" value={`${birthday}`}></input>
                </div>
                <div class="mb-3">
                    <label htmlFor="ageUser" class="form-label">
                        Edad
                    </label>
                    <input disabled={true} type="text" class="form-control" id="ageUser" value={`${age}`}></input>
                </div>
            </div>
        </>
    )
}

export default ProfileComponentView
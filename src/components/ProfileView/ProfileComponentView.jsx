import React from 'react'
import profileIcon from "../../assets/profile.png"

function ProfileComponentView({name, lastName, email, birthday, age, password}) {
  return (
    <>
        <div className=" container w-50 mt-3 p-3 border rounded border-secondary-subtle bg-gral me-4">
                <div className='d-flex justify-content-center w-100'>
                    <img className='w-50 border rounded-circle border-secondary-subtle' src={profileIcon} alt="" />
                </div>
                <div className="mb-3">
                    <label htmlFor="nameUser" className="form-label">
                        Nombre Completo
                    </label>
                    <input disabled={true} type="text" className="form-control" id="nameUser" value={`${name} ${lastName}`}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="emailUser" className="form-label">
                        Correo
                    </label>
                    <input disabled={true} type="email" className="form-control" id="emailUser" value={email}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="birthdayUser" className="form-label">
                        Fecha de Nacimiento
                    </label>
                    <input  disabled={true} type="date" className="form-control" id="birthdayUser" value={birthday}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="ageUser" className="form-label">
                        Edad
                    </label>
                    <input disabled={true} type="text" className="form-control" id="ageUser" value={age}></input>
                </div>
            </div>
    </>
  )
}

export default ProfileComponentView
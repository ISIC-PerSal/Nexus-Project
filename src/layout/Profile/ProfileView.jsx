import React from 'react'
import profileIcon from "../../assets/profile.png"
import ProfileEditableView from '../../components/ProfileEditable/ProfileEditableView'
import ProfileComponentView from '../../components/ProfileView/ProfileComponentView'

function ProfileView({ name, setName, lastName, setLastName, email, setEmail, birthday, setBirthday, age, password,
    setPassword, rfc, setRfc, clabe, setClabe, updateUser }) {
    return (
        <main className="py-3 d-flex justify-content-center w-100 ">
            <div className="w-75 d-flex justify-content-center">
                <ProfileComponentView name={name} lastName={lastName} email={email} birthday={birthday} age={age} password={password} />
                <ProfileEditableView name={name} setName={setName} lastName={lastName} setLastName={setLastName}
                    email={email} setEmail={setEmail} birthday={birthday} setBirthday={setBirthday}
                    password={password} setPassword={setPassword} rfc={rfc} setRfc={setRfc} clabe={clabe}
                    setClabe={setClabe} updateUser={updateUser} />
            </div>
        </main>
    )
}

export default ProfileView
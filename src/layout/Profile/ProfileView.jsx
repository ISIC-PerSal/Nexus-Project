import React from 'react'
import ProfileComponentView from '../../components/ProfileView/ProfileComponentView'
import ProfileEditableView from '../../components/ProfileEditable/ProfileEditableView'
function ProfileView({ name, setName, lastName, setlastName, email, setEmail, birthday, setBirthday, age, password, setPassword, rfc, setRfc, clabe, setClabe, updateUser }) {
    return (
        <>
            <main className="py-3 d-flex justify-content-center w-100 ">
                <div className="w-75 d-flex justify-content-center">
                    <ProfileComponentView name={name} lastName={lastName} email={email} birthday={birthday} age={age} />
                    <ProfileEditableView name={name} setName={setName} lastName={lastName} setlastName={setlastName}
                        email={email} setEmail={setEmail} birthday={birthday} setBirthday={setBirthday} password={password} setPassword={setPassword} rfc={rfc}
                        setRfc={setRfc}
                        clabe={clabe}
                        setClabe={setClabe} updateUser={updateUser} />
                </div>
            </main>
        </>
    );
}

export default ProfileView
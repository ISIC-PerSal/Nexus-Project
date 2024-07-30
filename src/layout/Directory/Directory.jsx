import React from 'react'
import DirectoryView from './DirectoryView'
import NavbarGuest from '../../components/Navbar/NavbarGuest'
import isAuth from '../../util/isAuth'
import Navbar from '../../components/Navbar/Navbar'

function Directory() {
    const isLogin= isAuth()
    console.log(isLogin)

    return (
        <>
            {
                isLogin? (<Navbar/>): (<NavbarGuest/>)
            }
            
            <DirectoryView />
        </>
    )
}

export default Directory
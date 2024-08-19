import React from 'react'
import DirectoryView from './DirectoryView'
import NavbarGuest from '../../components/Navbar/NavbarGuest'
import Navbar from '../../components/Navbar/Navbar'
import isAuth from '../../util/isAuth'
function Directory() {
    const isLogin= isAuth()
    return (
        <>
        {
           isLogin? (<Navbar />):(<NavbarGuest/>)
        } 
          
            <DirectoryView />
        </>
    )
}

export default Directory
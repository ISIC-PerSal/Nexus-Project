import React from 'react'
import AllianceView from './AllianceView'
import Navbar from '../../components/Navbar/Navbar'
import NavbarGuest from '../../components/Navbar/NavbarGuest'
import isAuth from '../../util/isAuth'

function Alliance() {
    const isLogin = isAuth()
    console.log(isLogin)
    return (
        <>
            {
                isLogin ? (<Navbar />) : (<NavbarGuest />)
            } 
            <AllianceView />
        </>
    )
}

export default Alliance
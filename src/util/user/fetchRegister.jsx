import React from 'react'
import getDataApi from '../getDataApi';

async function fetchRegister(body) {
    const url = "http://localhost/backend-nexus-project/user/createUser.php"
    try {
        const data = await getDataApi(url, body);
        return data
    } catch (error) {
        console.error("Error: ", error.message)
        return null
    }
}

export default fetchRegister
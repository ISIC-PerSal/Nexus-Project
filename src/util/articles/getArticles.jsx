import React from 'react'
import getDataApi from '../getDataApi';
const API_NEXUS_PROJECT = import.meta.env.VITE_API_NEXUS_PROJECT_DATABASE;


async function getArticles(title) {
    const url = `${API_NEXUS_PROJECT}/articles/getArticles.php?title=${title}`;
    try {
      const data = await getDataApi(url);
      return data;
    } catch (error) {
      console.error("Error: ", error.message);
      return null;
    }
}

export default getArticles
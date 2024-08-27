import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ExploreView from './ExploreView'
import fetchGetProject from '../../util/project/fetchGetProject';

function Explore() {
    const [dataProject, setdataProject] = useState([]);
    const [title, setTitle] = useState("")
    const [ods, setOds] = useState("")
    async function fetchData() {
        try {
            const data = await fetchGetProject("",title, ods);
            setdataProject(data);
            console.log(dataProject)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchData();
      }, [title, ods]);
    return (
        <>
            <Navbar />
            <ExploreView dataProject={dataProject} title={title} setTitle={setTitle} ods={ods} setOds={setOds} />
        </>
    )
}

export default Explore
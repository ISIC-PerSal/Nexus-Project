import React, { useEffect, useState } from 'react'
import NavbarView from '../../components/Navbar/NavbarView'
import ExploreView from './ExploreView'
import fetchGetProject from '../../util/project/fetchGetProject';

function Explore() {
    const [dataProject, setDataProject] = useState([]);
    const [title, setTitle] = useState("");
    const [ods, setOds] = useState("");

    async function fetchData() {
        try {
          const data = await fetchGetProject("", title, ods);
          setDataProject(data);
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
    <NavbarView/>
    <ExploreView dataProject={dataProject} title={title} setTitle={setTitle} ods={ods} setOds={setOds}/>
    </>
  )
}

export default Explore
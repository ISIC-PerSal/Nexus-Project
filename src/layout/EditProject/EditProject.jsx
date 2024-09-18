import React, { useEffect } from 'react'
import EditProjectView from './EditProjectView'
import Navbar from '../../components/Navbar/Navbar'
import { useParams } from 'react-router-dom';
import fetchGetProject from '../../util/project/fetchGetProject';

function EditProject() {
    const { idProject } = useParams();
    const {data, setData}= useState([])
    useEffect(() => {
        const getDataProject = async () => {
            const currentUser = sessionStorage.getItem("id_user");
                try {
                    const data = await fetchGetProject(
                        idProject,
                        currentUser,
                        "",
                        "",
                        ""
                    );
                    console.log(data);
                } catch { }
            };
        getDataProject();
        
    }, [idProject]);
    return (
        <>
            <Navbar />
            <EditProjectView />
        </>
    )
}

export default EditProject
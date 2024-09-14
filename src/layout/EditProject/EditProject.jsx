import React, { useEffect, useState } from 'react'
import EditProjectView from './EditProjectView'
import Navbar from '../../components/Navbar/Navbar'
import { useParams } from 'react-router-dom'
import fetchGetProject from '../../util/project/fetchGetProject';
import ErrorView from '../Error/ErrorView';

function EditProject() {
    const { idProject } = useParams();
    const [data, setData] = useState([]);

    const [project, setProject] = useState("");

    const [image, setImage] = useState("");
    const [leader_type, setLeader_type] = useState("");
    const [name, setName] = useState("");
    const [ods1, setOds1] = useState("");
    const [ods2, setOds2] = useState("");
    const [ods3, setOds3] = useState("");
    const [ods4, setOds4] = useState("");
    const [ods5, setOds5] = useState("");
    const [ods6, setOds6] = useState("");
    const [ods7, setOds7] = useState("");
    const [ods8, setOds8] = useState("");
    const [ods9, setOds9] = useState("");
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
        if (data.length) {
            setProject(data.project)
        }
    }, [idProject]);

    useEffect(() => {
        if (data && data.project) {
            setProject(data.project);
            setImage(data.image);
            setLeader_type(data.leader_type);
            setName(data.name);
            setOds1(data.ods1);
            setOds2(data.ods2);
            setOds3(data.ods3);
            setOds4(data.ods4);
            setOds5(data.ods5);
            setOds6(data.ods6);
            setOds7(data.ods7);
            setOds8(data.ods8);
            setOds9(data.ods9);
        }
    }, [data]);
    return (
        <>
            {data && data.project ? (
                <>
                    <Navbar />
                    <EditProjectView
                        data={data}
                        project={project}
                        setProject={setProject}
                        image={image}
                        setImage={setImage}
                        leader_type={leader_type}
                        setLeader_type={setLeader_type}
                        name={name}
                        setName={setName}
                        ods1={ods1}
                        setOds1={setOds1}
                        ods2={ods2}
                        setOds2={setOds2}
                        ods3={ods3}
                        setOds3={setOds3}
                        ods4={ods4}
                        setOds4={setOds4}
                        ods5={ods5}
                        setOds5={setOds5}
                        ods6={ods6}
                        setOds6={setOds6}
                        ods7={ods7}
                        setOds7={setOds7}
                        ods8={ods8}
                        setOds8={setOd8}
                        ods9={ods9}
                        setOds9={setOds9}

                    />
                </>
            ) : (
                <ErrorView />
            )}
        </>
    )
}

export default EditProject
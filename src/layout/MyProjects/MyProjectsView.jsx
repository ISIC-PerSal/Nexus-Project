import React from "react";
import JoinedProjects from "../../components/JoinedProjects/JoinedProjects";
import OwnProjects from "../../components/OwnProjects/OwnProjects";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PublishedProjects from "../../components/PublishedProjects/PublishedProjects";

function MyProjectsView({ idUser }) {
  return (
    <>
      <main className="py-3 d-flex justify-content-center w-100 bg-img">
        <div className="container w-75 mt-3 p-3 border rounded border-secondary-subtle bg-gral">
          <Tabs className="custom-tabs">
            <TabList>
              <Tab>Mis proyectos publicados</Tab>
              <Tab>Mis proyectos activos</Tab>
              <Tab>Mis proyectos terminados</Tab>
              <Tab>Proyectos incritos activos</Tab>
              <Tab>Proyectos incritos terminados</Tab>
              <Tab>Borradores</Tab>
            </TabList>
            <TabPanel>
              <PublishedProjects
                idUser={idUser}
                status={"Publicado"}
                type={"Propio"}
              />
            </TabPanel>
            <TabPanel>
              <PublishedProjects
                idUser={idUser}
                status={"Activo"}
                type={"Propio"}
              />
            </TabPanel>
            <TabPanel>
              <PublishedProjects
                idUser={idUser}
                status={"Finalizado"}
                type={"Propio"}
              />
            </TabPanel>
            <TabPanel>
              <JoinedProjects />
            </TabPanel>
            <TabPanel>Proyectos incritos terminados</TabPanel>
            <TabPanel>
              <PublishedProjects
                idUser={idUser}
                status={"Borrador"}
                type={"Propio"}
              />
            </TabPanel>
          </Tabs>
        </div>
      </main>
    </>
  );
}

export default MyProjectsView;

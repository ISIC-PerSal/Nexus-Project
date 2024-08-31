import React from "react";
import JoinedProjects from "../../components/JoinedProjects/JoinedProjects";
import OwnProjects from "../../components/OwnProjects/OwnProjects";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function MyProjectsView() {
  return (
    <>
      <main className="py-3 d-flex justify-content-center w-100 bg-img">
        <div className="container w-50 mt-3 p-3 border rounded border-secondary-subtle bg-gral">
          <Tabs className="custom-tabs">
            <TabList>
              <Tab>Mis proyectos activos</Tab>
              <Tab>Mis proyectos terminados</Tab>
              <Tab>Proyectos incritos activos</Tab>
              <Tab>Proyectos incritos terminado</Tab>
              <Tab>Borradores</Tab>
            </TabList>
            <TabPanel>
              <OwnProjects />
            </TabPanel>
            <TabPanel>
              Mis proyectos terminado
            </TabPanel>
            <TabPanel>
              <JoinedProjects />
            </TabPanel>
            <TabPanel>
              Mis proyectos inscritos terminados
            </TabPanel>
            <TabPanel>
              Borradores
            </TabPanel>
          </Tabs>
        </div>
      </main>
    </>
  );
}

export default MyProjectsView;

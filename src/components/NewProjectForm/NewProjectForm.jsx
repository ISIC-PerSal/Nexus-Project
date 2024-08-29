import React from 'react'
import NewProjectFormView from './NewProjectFormView'

function NewProjectForm() {
  function validarDatos(){
    console.log("first")
  };
  return (
    <>
      <NewProjectFormView
        leaderType={leaderType}
        setLeaderType={setLeaderType}
        name={name}
        setName={setName}
        checkName={checkName}
        setCheckName={setCheckName}
        phone={phone}
        setPhone={setPhone}
        email={email}
        setEmail={setEmail}
        checkEmail={checkEmail}
        setCheckEmail={setCheckEmail}
        rfc={rfc}
        setRfc={setRfc}
        checkRfc={checkRfc}
        setCheckRfc={setCheckRfc}
        clabe={clabe}
        setClabe={setClabe}
        checkClabe={checkClabe}
        setCheckClabe={setCheckClabe}
        project={project}
        setProject={setProject}
        urlProject={urlProject}
        setUrlProject={setUrlProject}
        volunteers={volunteers}
        setVolunteers={setVolunteers}
        description={description}
        setDescription={setDescription}
        projectType={projectType}
        setProjectType={setProjectType}
        donation={donation}
        setDonation={setDonation}
        country={country}
        setCountry={setCountry}
        state={state}
        setState={setState}
        zip={zip}
        setZip={setZip}
        city={city}
        setCity={setCity}
        address={address}
        setAddress={setAddress}
        startDate={startDate}
        setStartDate={setStartDate}
        finishDate={finishDate}
        setFinishDate={setFinishDate}
        checkedOds={checkedOds}
        handleCheckboxChange={handleCheckboxChange}
        handleSaveNewProject={handleSaveNewProject}
        handleImageUpload={handleImageUpload}
        setSelectedFile={setSelectedFile}
        fileInputRef={fileInputRef}
      />
    </>
  );
}

export default NewProjectForm;

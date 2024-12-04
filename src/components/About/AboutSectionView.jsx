import React from "react";
import Poster from "../../assets/Poster.jpg";

function AboutView({handleLanguage}) {
  return (
    <main className="bg-img py-3">
      <div className="container w-50 p-3 border rounded border-secondary-subtle bg-gral">
        <div className='fs-3 fw-bold'>
          {handleLanguage("title")}
        </div>
        <div>
          <p className='text-align-justify p-2'>
            {handleLanguage("description_1")}
            <br /><br />
            {handleLanguage("description_2")}
          </p>
        </div>
        <div>
          <img src={Poster} alt="Poster del proyecto" className="img-fluid shadow-lg rounded" style={{ maxWidth: "640px" }} />
        </div>
      </div>
    </main>
  );
}

export default AboutView;

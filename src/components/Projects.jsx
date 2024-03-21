import React, { useState } from "react";

function Projects() {
  const [btnState, setBtnState] = useState(false);

  function handleClick() {
    setBtnState((btnState) => !btnState);
  }

  let toggleClassCheck = btnState ? "overflow-visible max-w-screen-2xl" : null;

  return (
    <div className="bg-blue-600 w-full h-[250px] text-white rounded-2xl overflow-hidden">
      <div className="bg-green-600 bg-cover bg-opacity-30 flex items-center justify-center h-full rounded-2xl">
        <h3 className="text text-xl font-bold"> Proyectos</h3>
        <div className="flex overflow-hidden ">


        </div>
      </div>
    </div>
  );
}

export default Projects;

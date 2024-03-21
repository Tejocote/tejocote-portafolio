import React, { useState } from "react";

function Projects() {
  const [btnState, setBtnState] = useState(false);

  function handleClick() {
    setBtnState((btnState) => !btnState);
  }

  let toggleClassCheck = btnState ? " w-full h-full" : "w-4/6 h-1/2";
  let notAbout = btnState ? "duration-200 translate-x-10 opacity-0 hidden" : "opacity-100";

  return (
      <div className="w-full bg-green-700 flex items-center justify-center rounded-2xl">
        <h3 className="text text-xl font-bold"> Proyectos</h3>
   
      </div>
  );
}

export default Projects;

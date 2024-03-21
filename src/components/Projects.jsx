import React, { useState } from "react";

function Projects() {
  const [btnState, setBtnState] = useState(false);

  function handleClick() {
    setBtnState((btnState) => !btnState);
  }

  let toggleClassCheck = btnState ? " w-full h-4/6" : "text-white w-full h-3/6";
  let notAbout = btnState ? "duration-200 translate-x-10 opacity-0 hidden" : "opacity-100";

  return (
      <div onClick={handleClick} className={`bg-green-700 transition-all flex items-center justify-center rounded-2xl ${toggleClassCheck}  `}>
        <h3 className="text text-xl font-bold"> Proyectos</h3>
   
      </div>
  );
}

export default Projects;

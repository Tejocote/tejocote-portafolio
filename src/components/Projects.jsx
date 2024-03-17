import React, { useState } from "react";
import BtnProjects from "./BtnProjects.astro";

function Projects() {
  const [btnState, setBtnState] = useState(false);

  function handleClick() {
    setBtnState((btnState) => !btnState);
  }

  let toggleClassCheck = btnState ? "overflow-visible max-w-screen-2xl" : null;

  return (
    <div className="row-span-3 col-span-2 md:col-span-4 lg:row-span-6 lg:col-span-4 bg-[#174793] text-white items-center rounded-2xl overflow-hidden">
      <div className="bg-[#174793] text-center h-full rounded-2xl items-center">
          <h3 className="text text-xl font-bold"> Proyectos</h3>
        <div className="flex h-full lg:flex-col lg:rounded-2xl text-center pt-2 rounded-2xl">
          <div className="bg-green-400 bg-cover w-full h-full flex items-center justify-center overflow-hidden">
            <h4 className="m-auto font-onest text-xl font-bold text-white rounded-lg bg-green-700 px-4 py-2">
              Evergreen
            </h4>
          </div>
          <div className="bg-purple-400 bg-cover w-full h-full flex items-center justify-center overflow-hidden">
            <h4 className="m-auto font-onest text-xl font-bold text-white bg-purple-700 px-4 py-2  rounded-lg">
              Nebuverse
            </h4>
          </div>
          <div className="bg-orange-400 w-full h-full  flex items-center justify-center overflow-hidden">
            <h4 className="m-auto font-onest text-xl font-bold text-white bg-orange-700 px-4 py-2  rounded-lg ">
              Componentes
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

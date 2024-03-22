import React, { useState } from "react";
import Projects from "./Projects";
import About from "./About.jsx";
import Redes from "./Redes.jsx";
import Skills from './Skills.jsx';
import Theme from "./Theme.jsx";

export function Pruebas() {

  function handleClick() {
    setBtnState((btnState) => !btnState);
  }
  const [btnState, setBtnState] = useState(false);

  let toggleClassCheck = btnState ? "delay-200 w-full h-full" : "text-white w-4/6 h-2/6 ";
  let notProjects = btnState ? "duration-300 transition-all opacity-0 h-0" : "duration-300 transition-all opacity-100";

  return (
    <section className="h-[700px] px-2 mb-8">
      <div className="h-full flex flex-wrap justify-center">
        <div className={`w-full h-1/3 p-2 ${notProjects}`}>
        <About/>
        </div>
        <div onClick={handleClick}
         className={` transition-all p-2 ${toggleClassCheck}`}>
        <Projects/>
        </div>
        <div>
          
        </div>
        <div className={`w-2/6 h-2/6 p-2 ${notProjects}`}>
        <Redes/>
        </div>
        <div className={`w-2/6 h-1/6 p-2 ${notProjects}`}>
        <Theme/>
        </div>
        <div className={`w-4/6 h-1/6 p-2 ${notProjects}`}>
        <Theme/>
        </div>
        <div className={`h-1/6 w-full p-2 ${notProjects}`}>
        <Skills/>
        </div>
       
      </div>
    </section>
  );
}

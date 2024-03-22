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

  let toggleClassCheck = btnState ? "w-full h-full pb-8" : "delay-100 h-2/6 w-4/6 p-2";
  let notProjects = btnState ? "translate-y-6 opacity-0" : "opacity-100";
  let about = btnState ? " h-0 p-0 -translate-y-6 opacity-0 w-full " : "delay-100 w-full h-2/6";

  return (
    <section className="h-[90svh] p-2 mb-8 max-w-screen-sm mx-auto overflow-hidden">
      <div className="h-full flex flex-wrap">
        <div className={`duration-200 transition-all p-2 ${about}`}>
        <About/>
        </div>
        <div onClick={handleClick}
         className={` transition-all ${toggleClassCheck}`}>
        <Projects/>
        </div>
        <div>
          
        </div>
        <div className={`w-2/6 h-2/6 duration-200 transition-all p-2 ${notProjects}`}>
        <Redes/>
        </div>
        <div className={`w-2/6 h-1/6 duration-200 transition-all p-2 ${notProjects}`}>
        <Theme/>
        </div>
        <div className={`w-4/6 h-1/6 duration-200 transition-all p-2 ${notProjects}`}>
        <Theme/>
        </div>
        <div className={`h-1/6 w-full duration-200 transition-all p-2 ${notProjects}`}>
        <Skills/>
        </div>
       
      </div>
    </section>
  );
}

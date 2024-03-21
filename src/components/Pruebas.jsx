import React, { useState } from "react";
import Projects from "./Projects";
import About from "./About.jsx";
import Redes from "./Redes.jsx";
import Skills from './Skills.jsx';

export function Pruebas() {
  const [btnState, setBtnState] = useState(false);

  function handleClick() {
    setBtnState((btnState) => !btnState);
  }

  let toggleClassCheck = btnState ? " w-full h-full" : "w-4/6 h-1/2";
  let notAbout = btnState ? "duration-200 translate-x-10 opacity-0 hidden" : "opacity-100";

  return (
    <section className="bg-[#303030] h-screen w-screen px-4">
      <div className=" w-full p-4 flex flex-wrap justify-center">
        <About />
        <Redes/>
        <Projects/>
        <Skills/>
      </div>
    </section>
  );
}

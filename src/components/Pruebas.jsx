import React, { useState } from "react";
import Projects from "./Projects";
import About from "./About.jsx";
import Redes from "./Redes.jsx";
import Skills from './Skills.jsx';
import Theme from "./Theme.jsx";

export function Pruebas() {
  return (
    <section className="bg-[#303030] h-svh px-2">
      <div className="w-full h-full flex flex-wrap justify-center">
        <About/>
        <Redes/>
        <Projects/>
        <Skills/>
        <Theme/>
      </div>
    </section>
  );
}

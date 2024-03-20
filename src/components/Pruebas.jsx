import React, { useState } from "react";

export function Pruebas() {
  const [btnState, setBtnState] = useState(false);

  function handleClick() {
    setBtnState((btnState) => !btnState);
  }

  let toggleClassCheck = btnState ? "w-full h-full" : "w-7/12 h-1/3";
  let container = btnState ? "z-10 opacity-100" : "opacity-0";

  return (
    <section className="bg-[#303030] h-svh">
      <div className=" overflow-hidden w-svw bg-[#202020] h-svh">
        <ul className="flex flex-wrap h-full w-full bg-slate-500">
          <li
            onClick={handleClick}
            className={`${toggleClassCheck} flex items-center justify-center transition-all bg-red-600`}
          >
            <h3>About</h3>
            
          </li>
          <li className="w-5/12 h-1/3 bg-blue-700">Redes</li>
          <li className="w-full h-1/3 bg-purple-700">Proyectos</li>
          <li className="w-5/12 h-1/3 bg-blue-500">Habilidades</li>
          <li className="w-7/12 h-1/3 bg-indigo-700">Contacto</li>
        </ul>
      </div>
    </section>
  );
}

import React, { useState } from "react";

export function Pruebas() {

  const [btnState, setBtnState] = useState(false);

  function handleClick() {
    setBtnState((btnState) => !btnState);
  }


  let toggleClassCheck = btnState ? " w-full h-full z-10" : "1/2";
  let titleCard = btnState ? "x-auto my-4" : "-auto";
  let bodyCard = btnState ? "animate-fade-up animate-duration-300 -translate-y-3" : "opacity-0 translate-y-3";

  return (
    <section className="flex h-[700px] bg-slate-600 max-w-screen-sm mx-auto">
      <div className="flex flex-wrap relative my-auto w-full aspect-square">
        <div onClick={handleClick} className={`w-${toggleClassCheck} bg-yellow-500 transition-all h-1/2 flex flex-col absolute top-0 text-center left-0 `}>
            <button onClick="" className="w-10 ml-auto p-3 scale-x-[-1]" >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M3.41 2H16V0H1a1 1 0 0 0-1 1v16h2V3.41l28.29 28.3 1.41-1.41z" data-name="7-Arrow Up" /></svg>
            </button>
            <h3 className={`m${titleCard} text-xl font-bold font-onest`} >Holas</h3>
            <p className={`${bodyCard}  w-72 mx-auto`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa sed facilis!</p>
        </div>
        <div className={`w-1/2 right-0 top-0 bg-blue-300 absolute `}>
          <figure>
            <img src="https://images7.memedroid.com/images/UPLOADED252/64db984e4b2fa.webp" alt="No hace nada gato" />
          </figure>
        </div>
        <div className="right-0 bottom-0 w-1/2 bg-slate-900 absolute">
          <figure>
            <img src="https://images7.memedroid.com/images/UPLOADED252/64db984e4b2fa.webp" alt="No hace nada gato" />
          </figure>
        </div>
        <div className="left-0  bottom-0 w-1/2 bg-slate-900 absolute">
          <figure>
            <img src="https://images7.memedroid.com/images/UPLOADED252/64db984e4b2fa.webp" alt="No hace nada gato" />
          </figure>
        </div>
      </div>


    </section>

  )
}
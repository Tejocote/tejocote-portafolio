import React, { useState } from "react";

export function Pruebas() {

  const [btnState, setBtnState] = useState(false);

  function handleClick() {
    setBtnState((btnState) => !btnState);
  }

  let toggleClassCheck = btnState ? " z-10 w-full h-full" : "1/2";

  return (
    <section className="flex h-[700px] bg-slate-600 gap-3 max-w-screen-sm mx-auto relative">
      <div className="flex flex-wrap md:justify-start">
        <div className={`w-${toggleClassCheck} bg-yellow-500 transition-all h-1/2 flex flex-col absolute`}>
            <button onClick={handleClick} className="w-10 ml-auto p-3 scale-x-[-1]" >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M3.41 2H16V0H1a1 1 0 0 0-1 1v16h2V3.41l28.29 28.3 1.41-1.41z" data-name="7-Arrow Up" /></svg>
            </button>
            <h3 className="m-auto" >Holas</h3>
        </div>
        <div className="right-0 top-0 w-1/2 bg-blue-300 absolute">
          <figure className="w-full h-auto">
            <img className="object-cover" src="https://images7.memedroid.com/images/UPLOADED252/64db984e4b2fa.webp" alt="No hace nada gato" />
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
import React, {useState} from "react";

export function Pruebas(){

  const [btnState, setBtnState] = useState(false);

  function handleClick() {
    setBtnState((btnState) => !btnState);
  }

  let toggleClassCheck = btnState ? " col-end-5 row-start-1 row-end-2 z-10" : "";

  return(    
    <section className="w-full py-24 grid grid-cols-4 grid-rows-2 bg-slate-600 gap-3">
      
      <div className={"col-start-1 col-end-3 flex items-center justify-center bg-yellow-500 1 transition-all text-white " + (toggleClassCheck)}>
        <div className="flex w-full h-full flex-col">
      <button onClick={handleClick} className="w-10 ml-auto p-3 scale-x-[-1]" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M3.41 2H16V0H1a1 1 0 0 0-1 1v16h2V3.41l28.29 28.3 1.41-1.41z" data-name="7-Arrow Up"/></svg></button>
        <h3 className="m-auto" >Holas</h3>
        </div>
      </div>
      <div className="col-start-3 col-end-5 row-start-1 row-end-2 flex items-center justify-center bg-blue-300">
        <figure>
        <img src="https://images7.memedroid.com/images/UPLOADED252/64db984e4b2fa.webp" alt="" />
        </figure>
        </div>
      <div className="col-start-1 col-end-3 bg-slate-900">
      <figure>
        <img src="https://images7.memedroid.com/images/UPLOADED252/64db984e4b2fa.webp" alt="" />
        </figure>
      </div>
      <div  className="col-start-3 col-end-5 bg-slate-900">
      <figure>
        <img src="https://images7.memedroid.com/images/UPLOADED252/64db984e4b2fa.webp" alt="" />
        </figure>
      </div>
    </section>

  )
}
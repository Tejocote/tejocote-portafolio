import React, {useState} from "react"

export const Projects = () => {

 
  return(
    <div
  class="row-span-3 col-span-2 gap-4 md:col-span-4 lg:row-span-6 lg:col-span-4 bg-[#174793] text-white flex items-center rounded-2xl overflow-hidden "
>
  <div 
    class="bg-[#174793] w-full h-full rounded-2xl flex flex-col items-center group "
  >
  <button><h3 className="inset-0 text text-2xl font-bold"> Proyectos</h3></button> 
    <div class="flex w-full h-full lg:flex-col lg:rounded-2xl text-center pt-12 rounded-2xl">
      <div
        class="bg-evergreen bg-cover w-full h-full bg-opacity-5  flex items-center justify-center overflow-hidden"
      >
        <h4 class="m-auto font-onest text-xl font-bold text-white rounded-lg bg-green-700 px-4 py-2">Evergreen </h4>
      </div>
      <div class="bg-nebuverse bg-cover w-full h-full flex items-center justify-center overflow-hidden"><h4 class="m-auto font-onest text-xl font-bold text-white bg-purple-700 px-4 py-2  rounded-lg">Nebuverse</h4></div>
      <div
        class="bg-orange-500 w-full h-full  flex items-center justify-center overflow-hidden"
      >
        <h4 class="m-auto font-onest text-xl font-bold text-white bg-cyan-700 px-4 py-2  rounded-lg">Componentes</h4>
      </div>
    </div>
  </div>
</div>
  )
}
export default function About() {
  return(
<div
      class="w-5/6 h-1/3 bg-[#174793] text-white flex text-center rounded-2xl justify-evenly p-4 items-center"
    >
      <figure
        class="w-32 h-32 sm:w-36 rounded-full sm:h-36 flex justify-center mb-4"
      >
        <img
          src="./developer.jpg"
          alt="Retrato de cesarin solitario"
          class="aspect-square object-cover rounded-full"
        />
      </figure>
      <div class="flex flex-col">
        <h2 class="text-sm mb-2">Desarrollador web</h2>
        <h3 class="text-pretty font-black">Cesarin Tejocote</h3>
        <a href="#About"
          class="text-pretty text-zinc-900 font-bold bg-[#FCC100] rounded-lg px-4 py-1 mt-4 hover:bg-[#F1A300] mx-auto"
          >Acerca de mí</a
        >
      </div>
    </div>
  )
}

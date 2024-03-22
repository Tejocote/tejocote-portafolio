export default function About() {
  return(
<div
      className="h-full bg-[#174793] text-white flex text-center rounded-2xl justify-evenly p-4 items-center"
    >
      <figure
        className="w-32 h-32 sm:w-36 rounded-full sm:h-36 flex justify-center mb-4"
      >
        <img
          src="./developer.jpg"
          alt="Retrato de cesarin solitario"
          className="aspect-square object-cover rounded-full"
        />
      </figure>
      <div className="flex flex-col">
        <h2 className="text-sm mb-2">Desarrollador web</h2>
        <h3 className="text-pretty font-black">Cesarin Tejocote</h3>
        <a href="#About"
          className="text-pretty text-zinc-900 font-bold bg-[#FCC100] rounded-lg px-4 py-1 mt-4 hover:bg-[#F1A300] mx-auto"
          >Acerca de mí</a
        >
      </div>
    </div>
  )
}

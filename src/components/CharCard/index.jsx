const CharCard = ({ className, name, src, gender, specie, location }) => {

  return (
    <div className={className}>
      <h1 className="mb-2 font-sans text-xl font-semibold text-blue-gray-900 mt-5">{name}</h1>
      <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
        <img src={src} />
      </div>
      <div className="w-full flex flex-col gap-0.5 ml-20 mb-10">
        <h3>Gênero: {gender}</h3>
        <h3>Espécie: {specie}</h3>
        <h3>Localização: {location}</h3>
      </div>
    </div>
  )
}

export default CharCard;
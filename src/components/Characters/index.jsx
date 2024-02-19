import CharCard from "../CharCard";

const Characters = ({ className, characterList }) => {

  const addEllipsis = (str, limit) => {
    return str.length > limit ? str.substring(0, limit) + "..." : str
  }


  return (
    <div className={className}>
      {characterList.map(character => {
        console.log(character)
        const cardClass = character.status === "Alive"
          ? "flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md gap-10 items-center transition duration-300 hover:shadow-2xl cursor-pointer"
          : "flex w-96 flex-col rounded-xl bg-red-200 bg-clip-border text-gray-700 shadow-md gap-10 items-center transition duration-300 hover:shadow-2xl cursor-pointer";
        return (
          <CharCard
            className={cardClass}
            key={character.id}
            name={addEllipsis(character.name, 15)}
            src={character.image}
            gender={character.gender}
            specie={character.species}
            location={character.location.name}
          />
        );
      })}
    </div>
  );
};

export default Characters;

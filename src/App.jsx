import { useState, useEffect } from "react";
import { api } from "./services/api";
import Characters from "./components/Characters";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [currentPage, setCurrentPage] = useState("https://rickandmortyapi.com/api/character/");
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);

  useEffect(() => {
    const getCharacter = async () => {
      const { data } = await api.get(currentPage);
      // console.log(data)
      setCharacterList(data.results);
      setNextPage(data.info.next);
      setPrevPage(data.info.prev);
    }
    getCharacter()
  }, [currentPage])

  return (
    <div className="bg-slate-200">
      <div className="flex flex-col gap-10 justify-center items-center m-auto max-w-7xl w-screen">
        <div className="h-20 flex items-center">
          <h1 className="text-4xl text-gray-700 font-sans font-semibold">Personagens</h1>
        </div>
        <Characters
          className="flex flex-row flex-wrap gap-4 justify-center"
          characterList={characterList}
        />
        <div className="flex gap-10 my-5">
          <button onClick={() => prevPage && setCurrentPage(prevPage)}>Anterior</button>
          <button onClick={() => nextPage && setCurrentPage(nextPage)}>Próximo</button>
        </div>
      </div>
    </div>
  )
}

export default App


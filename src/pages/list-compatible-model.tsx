import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FilmsProps } from "../types/interface";
import { api } from "../lib/axios";

export function ListCompatibleModel() {
  const [listFilmsCompatibles, setListFilmsCompatibles] = useState(
    {} as FilmsProps
  );
  const { id } = useParams();
  const navigate = useNavigate();

  async function fetchFilmsComplatibles() {
    const response = await api.get(`/films/${id}`);
    setListFilmsCompatibles(response.data);
  }

  useEffect(() => {
    fetchFilmsComplatibles();
  }, []);

  function goToBack() {
    navigate(-1);
  }

  return (
    <div className="py-10">
      <div className="flex items-center justify-between mb-5">
        <h1 className="md:text-3xl text-lg font-bold">
          Lista de peliculas compatíveis com{" "}
          <span className="text-lime-400">
            {listFilmsCompatibles.model?.toLocaleUpperCase()}
          </span>
        </h1>

        <button onClick={goToBack}>Voltar</button>
      </div>

      {listFilmsCompatibles.compatibleFilms?.length === 0 ? (
        <h1 className="text-3xl font-bold text-center mt-10">
          Nenhuma compatibilidade encontrada
        </h1>
      ) : (
        <ul className="border border-zinc-700/30 mt-10">
          {listFilmsCompatibles.compatibleFilms?.map((film) => (
            <li
              key={film.id}
              className="flex items-center justify-between gap-2 p-3 border-b border-zinc-700/30"
            >
              <p className="font-bold uppercase">{film.model}</p>
              <p className="uppercase">{film.mark}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

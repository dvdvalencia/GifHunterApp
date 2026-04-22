import { useState } from "react"
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";
import type { Gif } from "../interfaces/gif.interface";



export const useGifs = () => {
   const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setpreviousTerms] = useState<string[]>([]);

  const handleTermClicked = async (term: string) => {
    const gifs = await getGifsByQuery(term);
    setGifs(gifs)
  };

  const handleSearch = async (query: string) => {
    query = query.trim().toLocaleLowerCase();

    if (query.length === 0) return;

    if (previousTerms.includes(query)) return;
    setpreviousTerms([query, ...previousTerms].slice(0, 8));

    const gifs = await getGifsByQuery(query);
    setGifs(gifs);
  };
  return {
    // Properties
    gifs,

    // Methods / Actions
    handleSearch,
    handleTermClicked,
    previousTerms,
  }
}

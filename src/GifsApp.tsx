import { PreviusSearches } from "./gifs/interfaces/PreviusSearches";
import { CustomHeader } from "./shared/components/CustomHeader";
import { GifList } from "./shared/components/GifList";
import { SearchBar } from "./shared/components/searchBar";
import { useGifs } from "./gifs/hooks/useGifs";


export const GifsApp = () => {

  const {gifs, handleSearch, handleTermClicked,  previousTerms} = useGifs()
  // const [gifs, setGifs] = useState<Gif[]>([]);
  // const [previousTerms, setpreviousTerms] = useState<string[]>([]);

  // const handleTermClicked = (term: string) => {
  //   console.log({ term });
  // };

  // const handleSearch = async (query: string) => {
  //   query = query.trim().toLocaleLowerCase();

  //   if (query.length === 0) return;

  //   if (previousTerms.includes(query)) return;

  //   // const currentTerms = previousTerms.slice (0, 7);
  //   // currentTerms.unshift(query);

  //   setpreviousTerms([query, ...previousTerms].slice(0, 8));

  //   // console.log({query});
  //   // await getGifsByQuery(query)
  //   const gifs = await getGifsByQuery(query);
  //   setGifs(gifs);
  // };
  //     const handleSearch = (query : string) => {
  //   query = query.trim().toLocaleLowerCase();
  //   if (query.length === 0) {
  //     return
  //   }
  //   console.log({query});
  // }
  return (
    <>
      {/*Header*/}
      <CustomHeader
        title="Buscador de Gisfs"
        description="Descubre y comparte el gif perfecto"
      />

      {/* Search */}
      <SearchBar
        placeholder="Busca lo que quieras"
        onQuery={handleSearch}
        // handleSearch= {(query :string) => handleSearch(query) }
      />

      {/* Busquedas previas */}
      <PreviusSearches
        searches={previousTerms}
        onLabelCliked={handleTermClicked}
      />

      {/* gifs */}
      {/* <div className="gifs-container">
      {
        mockGifs.map( (gif) => (
          <div key={gif.id} className="gif-card">
            <img src={gif.url} alt={gif.title} />
            <h3>{gif.title}</h3>
            <p>
              {gif.width}x{gif.height} (1.5mb)
            </p>
          </div>
        ))
      }
    </div> */}
      {/* GifList */}

      <GifList gifs={gifs} />
    </>
  );
};

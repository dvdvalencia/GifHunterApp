import { useEffect, useState } from "react";

interface props {
  placeholder?: string;
  onQuery: (query: string) => void;
}

export const SearchBar = ({ placeholder = "Buscar", onQuery }: props) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timeutId = setTimeout(() => {
      onQuery(query);
    }, 700);

    // console.log('Hola desde el Efecto');

    // onQuery(query);

    return () => {
      clearTimeout(timeutId);
    };
  }, [query, onQuery]);

  const handleSearch = () => {
    onQuery(query);
    // setQuery("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

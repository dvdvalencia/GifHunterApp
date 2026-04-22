import type { FC } from "react";

interface props {
  searches: string[];

  onLabelCliked: (term: string) => void;
}

export const PreviusSearches: FC<props> = ({searches, onLabelCliked}) => {
  return (
      <div className="previous-searches">
      {/* Busquedas previas */}
      <h2>Busquedas previas </h2>
      <ul className="previous-searches-list">
        {searches.map((term) =>(
          <li key={term}
          onClick={()=> onLabelCliked(term)}
          >{term}</li>
        ))}
      </ul>
    </div>
  )
}

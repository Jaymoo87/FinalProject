import React, { useEffect, useState } from "react";
import { fetchMealDataFromApi } from "../utils/apiFetch";

const Search = () => {
  const [results, setResults] = useState<string[]>([]);

  useEffect(() => {
    fetchMealDataFromApi(`search?query=pasta`).then((data) => setResults(data.items));
  }, []);

  return (
    <div>
      <input type="text" value={results} onChange={(e) => setResults([e.target.value])} />
      {results.map((r) => {
        <div>{r}</div>;
      })}
    </div>
  );
};

export default Search;

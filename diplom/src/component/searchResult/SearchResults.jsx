import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./SearchResults.css";

const SearchResults = () => {
  const [params] = useSearchParams();
  const q = params.get("q");
  const [results, setResults] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    if (q) {
      fetch(`/api/search?q=${q}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("🔍 Search API response:", data);

          setResults(data); // Because data is already a flat array

        })
        .catch((err) => {
          console.error("❌ Error fetching search:", err);
          setResults([]);
        });
    }
  }, [q]);
  console.log("RESULTS", results);


  return (
    <div className="search-results" style={{ padding: "2rem" }}>
      <h2>Search Results for "{q}"</h2>
      {Array.isArray(results) && results.length > 0 ? (
        <ul>
          {results.map((r, i) => (
            <li
              key={i}
              onClick={() => {
                if (r.type === "region" && r.path) {
                  navigate(r.path);
                }
              }}
            >
              <strong>{r.title}</strong> <span>({r.type})</span>
              <p>{r.description || r.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
    
  );
};

export default SearchResults;

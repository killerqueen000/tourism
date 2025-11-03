import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "./SearchDropdown.css";

const SearchDropdown = () => {
  const [expanded, setExpanded] = useState(false);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  const wrapperRef = useRef(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setExpanded(false);
        setSuggestions([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleSearch = () => {
    setExpanded((prev) => !prev);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setExpanded(false);
      setQuery("");
      setSuggestions([]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setActiveIndex((prev) => (prev + 1) % suggestions.length);
    } else if (e.key === "ArrowUp") {
      setActiveIndex((prev) => (prev - 1 + suggestions.length) % suggestions.length);
    } else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      const selected = suggestions[activeIndex];
      if (selected?.path) {
        setSuggestions([]);
        setExpanded(false);
        navigate(selected.path);
      }
    }
  };

  const fetchSuggestions = async (term) => {
    if (!term.trim()) return setSuggestions([]);
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(term)}`);
      const data = await res.json();
      const unique = [];
      const seen = new Set();

      data.forEach((item) => {
        const key = `${item.type}:${item.title}`;
        if (!seen.has(key) && item.path) {
          seen.add(key);
          unique.push({
            title: item.title,
            type: item.type,
            path: item.path,
          });
        }
      });

      setSuggestions(unique.slice(0, 5));
    } catch (err) {
      console.error("Failed to fetch suggestions", err);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => fetchSuggestions(query), 300);
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div ref={wrapperRef} className="search-wrapper">
      <form onSubmit={handleSubmit} className={`search-dropdown ${expanded ? "expanded" : ""}`}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setActiveIndex(-1);
          }}
          onKeyDown={handleKeyDown}
        />
        <button
          type="button"
          className="icon-button"
          onClick={toggleSearch}
          aria-label="Toggle search"
        >
          <FaSearch />
        </button>
      </form>

      {expanded && suggestions.length > 0 && (
        <ul className="autocomplete-list">
          {suggestions.map((item, index) => (
            <li
              key={index}
              className={index === activeIndex ? "active" : ""}
              onMouseDown={() => {
                if (item?.path) {
                  setSuggestions([]);
                  setExpanded(false);
                  navigate(item.path);
                } else {
                  console.warn("Invalid suggestion item:", item);
                }
              }}
            >
              {item?.title || "Untitled"}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchDropdown;

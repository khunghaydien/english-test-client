import React, { useState, useEffect, useRef } from "react";
import { Input } from "../ui/input";

interface Suggestion {
  value: string;
  label: string;
}

const suggestions: Suggestion[] = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "apricot", label: "Apricot" },
  { value: "avocado", label: "Avocado" },
  { value: "blueberry", label: "Blueberry" },
  { value: "apple", label: "Apple" },
  { value: "apple", label: "Apple" },
  { value: "apple", label: "Apple" },
];

const AutoCompleteInput: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<Suggestion[]>(
    []
  );
  const [activeSuggestionIndex, setActiveSuggestionIndex] =
    useState<number>(-1);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    if (value) {
      const tmpFiltered = suggestions.filter((suggestion) =>
        suggestion.label.toLowerCase().includes(value.toLowerCase())
      );
      const filtered = Array.from(
        new Set(
          tmpFiltered.map((tmpItem) => `${tmpItem.value}-${tmpItem.label}`)
        )
      )
        .map((item) => {
          const [value, label] = item.split("-");
          return { value, label };
        })
        .splice(0, 10);
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
    }
    setActiveSuggestionIndex(-1);
  };

  const handleClick = (suggestion: Suggestion) => {
    setInputValue(suggestion.label);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      setActiveSuggestionIndex((prevIndex) =>
        prevIndex < filteredSuggestions.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (event.key === "ArrowUp") {
      setActiveSuggestionIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    } else if (event.key === "Enter") {
      if (
        activeSuggestionIndex >= 0 &&
        activeSuggestionIndex < filteredSuggestions.length
      ) {
        handleClick(filteredSuggestions[activeSuggestionIndex]);
      }
    } else if (event.key === "Escape") {
      setShowSuggestions(false);
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="autocomplete-container relative">
      <Input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="autocomplete-input"
        placeholder="Start typing..."
        ref={inputRef}
      />
      {showSuggestions && filteredSuggestions.length > 0 && (
        <ul className="animate-in fade-in-0 zoom-in-95 absolute top-10 z-10 w-full rounded-lg outline-none bg-white dark:bg-black border">
          {filteredSuggestions.slice(0, 10).map((suggestion, index) => (
            <li
              key={suggestion.value}
              onClick={() => handleClick(suggestion)}
              className={`autocomplete-suggestion p-1 rounded-sm ${
                index === activeSuggestionIndex ? "bg-muted" : ""
              }`}
            >
              {suggestion.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoCompleteInput;

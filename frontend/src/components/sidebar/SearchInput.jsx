import React from "react";

const SearchInput = () => {
  return (
    <form>
      <div className="mt-4 mx-4 p-3">
        <label className="input">
          <button type="submit">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="M21 21L16.7 16.7"></path>
              </g>
            </svg>
          </button>
          <input type="search" required placeholder="Search" />
        </label>
      </div>
    </form>
  );
};

export default SearchInput;

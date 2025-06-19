import React from "react";

const SearchInput = ({ search, setSearch }) => {
  return (
    <form>
      <div className="mt-4 mx-4 p-3">
        <label className="input">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            required
            placeholder="Search"
          />
        </label>
      </div>
    </form>
  );
};

export default SearchInput;

import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Search for books..."
        className="p-2 border border-gray-300 rounded w-full"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded mt-2 w-full">
        Search
      </button>
    </form>
  );
}

export default SearchBar;


import React, { useState } from 'react';
import { fetchBooks, fetchBookDetails } from './api';
import SearchBar from './components/SearchBar';
import BookCard from './components/BookCard';
import BookDetails from './components/BookDetails';
import './App.css'

function App() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleSearch = async (searchQuery) => {
    setQuery(searchQuery);
    setLoading(true);
    setError(null);
    try {
      const data = await fetchBooks(searchQuery);
      setBooks(data);
    } catch (error) {
      setError('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      {error && <div className="text-red-500">{error}</div>}
      {loading ? (
        <div>Loading...</div>
      ) : selectedBook ? (
        <BookDetails book={selectedBook} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {books.map((book) => (
            <BookCard
              key={book.key}
              book={book}
              onClick={() => fetchBookDetails(book.key)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

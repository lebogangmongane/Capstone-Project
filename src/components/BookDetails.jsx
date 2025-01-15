function BookDetails({ book }) {
    return (
      <div className="p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold">{book.title}</h1>
        <p>{book.description || 'No description available'}</p>
        <p>ISBN: {book.isbn_13 ? book.isbn_13[0] : 'N/A'}</p>
        <p>Published: {book.publish_date}</p>
        <p>Pages: {book.number_of_pages || 'N/A'}</p>
        <p>Genres: {book.subjects?.join(', ') || 'N/A'}</p>
      </div>
    );
  }
  
  export default BookDetails;
  
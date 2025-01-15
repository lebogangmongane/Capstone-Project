function BookCard({ book, onClick }) {
    const coverUrl = book.cover_i
      ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
      : 'https://via.placeholder.com/150';
  
    return (
      <div className="bg-white p-4 shadow-md rounded-lg" onClick={() => onClick(book.key)}>
        <img src={coverUrl} alt={book.title} className="w-full h-40 object-cover mb-2" />
        <h3 className="text-lg font-bold">{book.title}</h3>
        <p className="text-sm">{book.author_name?.join(', ')}</p>
      </div>
    );
  }
  
  export default BookCard;
  
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import BookCard from './BookCard';
import './Book.css'
import { useSelector } from 'react-redux';

function BrowseBooks() {
  const { category } = useParams();
  const [search, setSearch] = useState('');
  const books = useSelector(state => state.books.books);

  const filteredBooks = books.filter(book => {
    const matchesCategory = category ? book.category === category : true;
    const matchesSearch = book.title.toLowerCase().includes(search.toLowerCase()) ||
                          book.author.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <h2>Browse Books {category && `in ${category}`}</h2>
      <input
        type="text"
        placeholder="Search by title or author..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="books-grid">
        {filteredBooks.length > 0 ? (
          filteredBooks.map(book => <BookCard key={book.id} book={book} />)
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
}

export default BrowseBooks;

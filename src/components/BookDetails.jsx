import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Book.css'

function BookDetails() {
  const { id } = useParams();
  const books = useSelector(state => state.books.books);
  const book = books.find(book => book.id === parseInt(id));

  if (!book) return <p>Book not found.</p>;

  return (
    <div className="book-details">
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Rating:</strong> {book.rating}</p>
      <Link to="/browse">Back to Browse</Link>
    </div>
  );
}

export default BookDetails;

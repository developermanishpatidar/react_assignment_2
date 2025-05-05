import './Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-logo">📚</div>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/browse">Browse Books</Link></li>
          <li><Link to="/addBook">Add Book</Link></li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
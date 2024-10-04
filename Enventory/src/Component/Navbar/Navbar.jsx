import './navbar.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation(); // Get the current URL path
  const isHomePage = location.pathname === '/';

  return (
    <div className="navbar">
      <div className="brand">Employee MS</div>
      <div className="welcome">Welcome Admin</div>
      <div className="change-buttons">
        {isHomePage ? (
          <>
            <Link to="/signin" className="btn">Sign In</Link>
            <Link to="/signup" className="btn">Sign Up</Link>
          </>
        ) : (
          <div className="logout">Logout</div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
import React, { useState } from 'react'; 
import Login from '../LoginSignupPopup/Login';

const Header = ({ scrollToMain }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div className="header-wrapper">
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
            <h1>My Note</h1>
          </a>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="/" className="nav-link px-2">Home</a></li>
            <li><a href="/CreateNote" className="nav-link px-2">Create Note</a></li>
            <li><a href="/about" className="nav-link px-2">About</a></li>
          </ul>

          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2" onClick={openPopup}>Login</button>
            {isPopupOpen && <Login closePopup={closePopup} />}
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;

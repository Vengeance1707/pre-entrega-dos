import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        PC Components
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/cpu">
              CPUs
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/gpu">
              GPUs
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/motherboard">
              Motherboards
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/ram">
              RAMs
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/cooler">
              Coolers
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

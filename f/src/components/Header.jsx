import React from "react";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="Header">
        <div>
          <Link to="/contact" className="link">
            Contact
          </Link>
          <Link to="/invoice" className="link">
            Invoices
          </Link>
          <Link to="/create" className="link">
            Create invoice
          </Link>
          <Link to="/login" className="link">
            Login
          </Link>
        </div>
        <div>
          <p>Wellcome!</p>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Header;

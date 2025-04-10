import React from "react";
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">Medical Parts</h1>
        <nav>
          <ul className="flex gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Products</Link>
          </li>
          <li>
            <Link to="/contact">Contacts</Link>
          </li>
         
           
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;


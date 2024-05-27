import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-100 p-4 flex justify-between">
      <div className="font-bold">SpArts</div>
      <div className="space-x-4">
        <a href="#customers">Our Customers</a>
        <a href="#advantage">SpArts Advantage</a>
        <a href="#contact">Contact Us</a>
      </div>
    </nav>
  );
};

export default Navbar;

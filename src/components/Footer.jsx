import React from "react";

const Footer = () => {
  return (
    <div className="bg-yellow-200 p-10 text-center">
      <h2 className="text-2xl font-bold">Stay Updated</h2>
      <form className="mt-4">
        <input type="email" placeholder="E-mail" className="p-2 rounded" />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Footer;

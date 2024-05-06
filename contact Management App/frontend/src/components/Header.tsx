import React from "react";
import usePaths from "../utils/usePaths";

const Header: React.FC = () => {
  const name = usePaths();

  return (
    <header className="bg-gradient-to-r from-blue-500 to-blue-700">
      <h1 className="text-3xl font-bold text-white p-4 animate-fadeIn">Welcome, {name}</h1>
      <p className="text-sm text-gray-200 px-4 pb-2">Stay connected and manage your contacts efficiently.</p>
    </header>
  );
};
export default Header;

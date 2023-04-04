import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 py-4 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center">
        <div className="text-white font-bold text-xl">Logo</div>
        <nav className="text-white">
          <a href="#features" className="mx-2">Features</a>
          <a href="#pricing" className="mx-2">Pricing</a>
          <a href="#contact" className="mx-2">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

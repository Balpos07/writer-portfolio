import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-gray-800 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">Writer's Name</div>
        <div className="flex space-x-4">
          <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-gray-400">About</Link>
          <Link to="experience" smooth={true} duration={500} className="cursor-pointer hover:text-gray-400">Experience</Link>
          <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-gray-400">Projects</Link>
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-gray-400">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
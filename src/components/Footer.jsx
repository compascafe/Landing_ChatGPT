import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="flex flex-wrap justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="font-bold text-xl mb-2">Logo</h3>
            <p>123 Your Street, City, State, ZIP</p>
            <p>Email: info@example.com</p>
            <p>Phone: (555) 555-5555</p>
          </div>
          <div className="mb-4 md:mb-0">
            <h3 className="font-bold text-xl mb-2">Quick Links</h3>
            <ul>
              <li><a href="#about-us">About Us</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">Follow Us</h3>
            <ul className="flex space-x-4">
              <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

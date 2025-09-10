import React, { useState } from 'react';

const navLinks = [
  { name: 'BERANDA', href: '#' },
  { name: 'TENTANG SAYA', href: '#tentang-saya' },
  { name: 'KETERAMPILAN', href: '#keterampilan' },
  { name: 'PROJEK SAYA', href: '#projek-saya' },
  { name: 'KONTAK SAYA', href: '#kontak-saya' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-[#0e0e47] p-5 flex justify-between items-center w-full sticky top-0 z-20 shadow-lg">
        <div className="text-lg md:text-xl font-bold text-[#c1aed2] cursor-default">
           M. Oriza Saltifa
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-blue-300 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-white z-30 focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      <nav 
        className={`md:hidden absolute top-[76px] left-0 w-full bg-[#0e0e47] shadow-lg z-20 transition-all duration-300 ease-in-out transform ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}
        aria-hidden={!isMenuOpen}
        >
        <div className="flex flex-col items-center gap-6 py-8">
            {navLinks.map((link) => (
            <a
                key={link.name}
                href={link.href}
                onClick={toggleMenu} // Close menu when a link is clicked
                className="text-lg font-medium hover:text-blue-300 transition-colors duration-300"
            >
                {link.name}
            </a>
            ))}
        </div>
      </nav>
    </>
  );
};

export default Header;

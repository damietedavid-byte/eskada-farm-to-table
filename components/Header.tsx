
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShoppingCartIcon, MenuIcon, XIcon } from '../assets/icons';
import { CATEGORIES } from '../constants';

const Header: React.FC = () => {
  const { cartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'All Products', path: '/products' },
    ...CATEGORIES.map(cat => ({ name: cat.name, path: `/products/${cat.slug}` })),
    { name: 'Gallery', path: '/gallery' },
    { name: 'Consultation', path: '/consultation' },
    { name: 'Blog', path: '/blog' },
  ];

  // Links after the categories dropdown for desktop view
  const postCategoryLinks = navLinks.slice(2 + CATEGORIES.length);


  return (
    <header className="bg-eskada-green text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="text-3xl font-bold text-eskada-gold tracking-wider">
              ESKADA
            </Link>
          </div>
          <nav className="hidden lg:flex lg:space-x-8">
            {navLinks.slice(0, 2).map(link => (
                <NavLink key={link.name} to={link.path} className={({ isActive }) => `text-white hover:text-eskada-gold transition duration-300 ${isActive ? 'text-eskada-gold' : ''}`}>
                    {link.name}
                </NavLink>
            ))}
             <div className="relative group">
                <button className="text-white hover:text-eskada-gold transition duration-300">
                    Categories
                </button>
                <div className="absolute hidden group-hover:block bg-eskada-green rounded-md shadow-lg py-2 w-48">
                    {CATEGORIES.map(cat => (
                         <NavLink key={cat.id} to={`/products/${cat.slug}`} className={({ isActive }) => `block px-4 py-2 text-sm text-white hover:bg-eskada-light-green ${isActive ? 'bg-eskada-light-green' : ''}`}>
                            {cat.name}
                        </NavLink>
                    ))}
                </div>
            </div>
            {postCategoryLinks.map(link => (
                <NavLink key={link.name} to={link.path} className={({ isActive }) => `text-white hover:text-eskada-gold transition duration-300 ${isActive ? 'text-eskada-gold' : ''}`}>
                    {link.name}
                </NavLink>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <Link to="/checkout" className="relative text-white hover:text-eskada-gold transition duration-300">
              <ShoppingCartIcon className="h-7 w-7" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <div className="lg:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <XIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
                </button>
            </div>
          </div>
        </div>
      </div>
       {isMenuOpen && (
        <div className="lg:hidden bg-eskada-light-green">
            <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                 {navLinks.map(link => (
                    <NavLink key={link.name} to={link.path} onClick={() => setIsMenuOpen(false)} className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-eskada-green ${isActive ? 'bg-eskada-green font-semibold' : ''}`}>
                        {link.name}
                    </NavLink>
                ))}
            </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
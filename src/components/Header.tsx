'use client';

import Link from 'next/link';
import React, { useState } from 'react';

type Props = {};

const Header = (props: Props) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <nav id='desktop-nav'>
        <div className='logo'>jason logo here</div>
        <div>
          <ul className='nav-links'>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#experience'>Experience</a>
            </li>
            <li>
              <a href='#projects'>Projects</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <nav id='hamburger-nav'>
        <div className='logo'>logo</div>
        <div className='hamburger-menu'>
          <div
            className={`hamburger-icon ${showMenu ? 'open' : ''}`}
            onClick={handleMenuToggle}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`menu-links ${showMenu ? 'open' : ''}`}>
            <li>
              <a href='#about' onClick={handleMenuToggle}>
                About
              </a>
            </li>
            <li>
              <a href='#experience' onClick={handleMenuToggle}>
                Experience
              </a>
            </li>
            <li>
              <a href='#projects' onClick={handleMenuToggle}>
                Projects
              </a>
            </li>
            <li>
              <a href='#contact' onClick={handleMenuToggle}>
                Contact
              </a>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

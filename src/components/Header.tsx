'use client';

import Link from 'next/link';
import Image from 'next/image';
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
      <section id='profile'>
        <div className='section__pic-container'>
          {/* <Image
            src='/profile-pic.png'
            width={500}
            height={500}
            alt='Jason Johnson profile pic'
          ></Image> */}
          <img src='/JasonJohnson.jpeg' alt='' />
        </div>
        <div className='section__text'>
          <p className='section__text__p1'>Hello, I'm</p>
          <h1 className='title'>Jason</h1>
          <p className='section__text__p2'>Frontend Developer</p>
          <div className='btn-container'>
            <button
              className='btn btn-color-2'
              onClick={() => window.open('/resume-example.png')}
            >
              open resume
            </button>
            <button
              className='btn btn-color-1'
              onClick={() => {
                location.href = '/#contact';
              }}
            >
              contact
            </button>
          </div>
          <div id='socials-container'>
            <img
              src='/linkedin.png'
              alt='Linkedin profile'
              className='icon'
              onClick={() =>
                window.open('https://linkedin.com/in/jasoncjohnson5')
              }
            />
            <img
              src='/github.png'
              alt='Github profile'
              className='icon'
              onClick={() => window.open('https://github.com/jaysenjonsin')}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;

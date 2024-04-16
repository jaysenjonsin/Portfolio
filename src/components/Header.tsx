import Link from 'next/link';
import React from 'react';

type Props = {};

const Header = (props: Props) => {
  return (
    <nav id='desktop-nav'>
      <div className='logo'>Logo </div>
      <div>
        <ul className='nav-links'>
          <li>
            <Link href='#about'>About</Link>
          </li>
          <li>
            <Link href='#experince'>Experience</Link>
          </li>
          <li>
            <Link href='#projects'>Projects</Link>
          </li>
          <li>
            <Link href='#contact'>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

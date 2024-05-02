'use client';

import React from 'react';

type Props = {};

const ProfileSection = (props: Props) => {
  return (
    <div>
      <section id='profile'>
        <div className='section__pic-container'>
          {/* <Image
            src='/profile-pic.png'
            width={500}
            height={500}
            alt='Jason Johnson profile pic'
          ></Image> */}
          <img src='/Jasonjohnson.jpeg' alt='' />
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

export default ProfileSection;

'use client';
import React from 'react';

type Props = {};

const ExperienceSection = (props: Props) => {
  return (
    <section id='experience'>
      <h1 className='title'>Experience</h1>
      <div className='experience-details-container'>
        <div className='about-containers'>
          <div className='details-container'>
            <h2 className='experience-sub-title'>Frontend Development</h2>
            <div className='article-container'>
              <article>
                <img
                  src='/checkmark.png'
                  alt='experience icon'
                  className='icon'
                />
                <div>
                  <h3>HTML</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src='/checkmark.png'
                  alt='experience icon'
                  className='icon'
                />
                <div>
                  <h3>HTML</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src='/checkmark.png'
                  alt='experience icon'
                  className='icon'
                />
                <div>
                  <h3>HTML</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src='/checkmark.png'
                  alt='experience icon'
                  className='icon'
                />
                <div>
                  <h3>CSS</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src='/checkmark.png'
                  alt='experience icon'
                  className='icon'
                />
                <div>
                  <h3>HTML</h3>
                  <p>Experienced</p>
                </div>
              </article>
            </div>
          </div>
          <div className='details-container'>
            <h2 className='experience-sub-title'>Backend Development</h2>
            <div className='article-container'>
              <article>
                <img
                  src='/checkmark.png'
                  alt='experience icon'
                  className='icon'
                />
                <div>
                  <h3>HTML</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src='/checkmark.png'
                  alt='experience icon'
                  className='icon'
                />
                <div>
                  <h3>HTML</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src='/checkmark.png'
                  alt='experience icon'
                  className='icon'
                />
                <div>
                  <h3>HTML</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src='/checkmark.png'
                  alt='experience icon'
                  className='icon'
                />
                <div>
                  <h3>CSS</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src='/checkmark.png'
                  alt='experience icon'
                  className='icon'
                />
                <div>
                  <h3>HTML</h3>
                  <p>Experienced</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <img
        src='/arrow.png'
        alt='Arrow icon'
        className='icon arrow'
        onClick={() => {
          location.href = './#projects';
        }}
      />
    </section>
  );
};

export default ExperienceSection;

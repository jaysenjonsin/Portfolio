'use client';
import React from 'react';

type Props = {};

const AboutSection = (props: Props) => {
  return (
    <section id='about'>
      <p className='section__text__p1'>Get To Know More</p>
      <h1 className='title'>About Me</h1>
      <div className='section-container'>
        <div className='section__pic-container'>
          <img
            src='/about-pic.png'
            alt='Profile picture'
            className='about-pic'
          />
        </div>
        <div className='about-details-container'>
          <div className='about-containers'>
            <div className='details-container'>
              <img
                src='/experience.png'
                alt='Experience icon'
                className='icon'
              />
              <h3>Experience</h3>
              <p>
                2+ years <br />
                Frontend Development
              </p>
            </div>
            <div className='details-container'>
              <img src='/education.png' alt='Education icon' className='icon' />
              <h3>Education</h3>
              <p>
                B.Sc. Bachelors Degree
                <br />
                M.Sc. Masters Degree
              </p>
            </div>
          </div>
          <div className='text-container'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
              reprehenderit et laborum, rem, dolore eum quod voluptate
              exercitationem nobis, nihil esse debitis maxime facere minus sint
              delectus velit in eos quo officiis explicabo deleniti dignissimos.
              Eligendi illum libero dolorum cum laboriosam corrupti quidem,
              reiciendis ea magnam? Nulla, impedit fuga!
            </p>
          </div>
        </div>
      </div>
      <img
        src='/arrow.png'
        alt='Arrow icon'
        className='icon arrow'
        // onclick="location.href='./#experience'"
      />
    </section>
  );
};

export default AboutSection;

'use client';
import React from 'react';

type Props = {};

const ProjectSection = (props: Props) => {
  return (
    <section id='projects'>
      <p className='section__text__p1'>Browse My Recent</p>
      <h1 className='title'>Projects</h1>
      <div className='experience-details-container'>
        <div className='details-container color-container'>
          <div className='article-container'>
            <img src='/project-1.png' alt='project 1' className='project-img' />
          </div>
          <h2 className='experience-sub-title project-title'>Project One</h2>
          <div className='btn-container'>
            <button
              className='btn btn-color-2 project-btn'
              onClick={() => {
                location.href = 'https://github.com';
              }}
            >
              Github
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;

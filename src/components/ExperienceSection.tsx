import React from 'react';

type Props = {};

const ExperienceSection = (props: Props) => {
  return (
    <section id='experince'>
      <h1 className='title'>Experience</h1>
      <div className='experience-details-container'>
        <div className='about-containers'>
          <div className='detail-containers'>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

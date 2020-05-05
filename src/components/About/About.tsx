import React from 'react';

import { H1, Info, AboutContainer } from './styles';

const About = () => {
  return (
    <AboutContainer>
      <H1>boxShadows</H1>
      <Info>
        &nbsp;
        by
        &nbsp;
        <a href='https://abinavseelan.com' className='link' target='_blank' rel="noopener noreferrer">@abinavseelan</a>
        &nbsp;
        &amp;
        &nbsp;
        <a href='https://aditimohanty.com' className='link' target='_blank' rel="noopener noreferrer">@rheaditi</a>
      </Info>
    </AboutContainer>
  )
};

export default About;

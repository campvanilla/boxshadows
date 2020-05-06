import React from 'react';
import Logo from '@assets/logo-light-medium-400x70.png';

import { AboutContainer } from './styles';

const About = () => {
  return (
    <AboutContainer>
      <div className='header'>
        <img src={Logo} className='logo' alt='Logo' />
      </div>
      <p className='blurb'>
        A project by
        <br />
        <a className='link' href='https://abinavseelan.com'>@abinavseelan</a>
        &nbsp; &amp; &nbsp;
        <a className='link' href='https://aditimohanty.com'>@aditimohanty</a>
      </p>
    </AboutContainer>
  );
}

export default About;

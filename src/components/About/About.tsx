import React from 'react';
import Button from '@components/Button';
import Logo from '@assets/logo-light-medium-400x70.png';
import { Github, Twitter } from '@components/icons';

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
        <a className='link' target='_blank' rel='noopener noreferrer' href='https://abinavseelan.com'>
          @abinavseelan
        </a>
        &nbsp; &amp; &nbsp;
        <a className='link' target='_blank' rel='noopener noreferrer' href='https://aditimohanty.com'>
          @aditimohanty
        </a>
      </p>
      <div className='cta-container'>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/campvanilla/boxshadows'
          className='hidden-link'
        >
          <Button className='cta github'>
            <Github />
            STAR ON GITHUB
          </Button>
        </a>
        <a
          className='hidden-link'
          target='_blank'
          rel='noopener noreferrer'
          href='https://twitter.com/intent/tweet?text=Boxshadows+%7C+Create+%26+tweak+css+box-shadows+or+roll+with+some+neat+presets%21+%E2%9A%A1%EF%B8%8F+https%3A%2Fboxshadows.com'
        >
          <Button className='cta twitter'>
            <Twitter />
            SHARE ON TWITTER
          </Button>
        </a>
      </div>
    </AboutContainer>
  );
}

export default About;

import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import video_Editor from '../assets/videos/video-1.mp4';
function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={video_Editor} autoPlay loop muted />
      <h1>LET'S GET THE EGG BOILING</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;

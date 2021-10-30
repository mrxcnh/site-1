import React from 'react';
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="./videos/video-1.mp4" autoPlay loop muted/>
      <h1>Trải nghiệm những hành trình</h1>
      <p>Chia sẻ cảm nhận của bạn tạo cảm hứng cho người mới</p>
      <div className="hero-btns">
        <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large'>Bắt đầu ngay</Button>
        <Button className="btns" buttonStyle='btn--primary' buttonSize='btn--large'>Xem Trailer<i className="far fa-play-circle"></i></Button>
      </div>
    </div>
  )
}

export default HeroSection

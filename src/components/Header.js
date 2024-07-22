// src/components/Header.js
import React from 'react';
import profileImage from '../assets/profile.jpg';
const Header = () => (
  <header>
    <img src={profileImage} alt="Profile" className="profile-image" />
    <h1>Samuel Mburu Kimuhu</h1>
    <nav>
      <a href="#bio">Bio</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#skills">Skills</a>
      <a href="#experience">Experience</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
);

export default Header;

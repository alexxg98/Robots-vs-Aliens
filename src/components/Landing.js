import React, {Component} from 'react';
import logo from '../images/logo.png';
import title from '../images/RobotsVsAliens.png';
import '../css/landing.css';

export default class Landing extends Component {
  render(){
    return (

      <div className="landing-container" id="HomeSec">
        <div className="logo-container">
          <img src={logo} alt="logo" id="index_logo" />
        </div>
        <div id="introText">
          <h1 id="introName"> Hi! We are <span>Alexandria</span> and <span>Linda</span>. </h1>
          <p> This is our project for Senior Design at The City College of New York. <br></br>The game is based on Plants vs Zombies. Made on Unity, version 2018.4.33f1. </p>
        </div>

      </div>

    );
  }
}

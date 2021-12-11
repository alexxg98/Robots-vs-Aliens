import React, {Component} from 'react';
import logo from '../images/logo.png';
import '../css/navigation.css';

export default class Navbar extends Component {
  render(){
    return (

      <div className="nav">
        <ul>
          <li>Hello!</li>
          <li>
            <a href="https://github.com/alexxg98/SD_FinalProject">
              Github
            </a>
          </li>
        </ul>



      </div>

    );
  }
}

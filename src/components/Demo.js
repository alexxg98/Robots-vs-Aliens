import React, {Component} from 'react';
import startScreen from '../images/StartScreen.JPG';
import pauseScreen from '../images/PauseScreen.JPG';
import title from '../images/RobotsVsAliens.png';
import startMenuVideo from '../demo_vid/StartScreen.mp4';
import walkthru1 from '../demo_vid/Walkthru1.mp4';
import walkthru2 from '../demo_vid/Walkthru2.mp4';
import walkthru3 from '../demo_vid/Walkthru3.mp4';
import winlose from '../demo_vid/winlose.mp4';
import '../css/demo.css';

export default class Demo extends Component {
  render(){
    return (

      <div className="demo-container">
        <div className="start-container">
          <img src={startScreen} alt="mainmenu" id="startImg" />
        </div>

        <div id="demo-show">
          <h3>Objective</h3>
          <p>Your homebase is being attacked by aliens who want access to your time portal and it is up to your robots to defend it!</p>
          <p>The homebase barricades have been breached and your mission is to collect enough coils to repair them while your robots fend off incoming invaders.</p>
          <h3>How To Play</h3>
          <p>When player first loads the unity game, the first screen that displays is the start screen or the main menu. In this screen, there's a simple How-To-Play guide and an About information text.</p>
          <video src={startMenuVideo} autoPlay="true" muted="true" width="100%" loop="true" />

          <p>In the current iteration, the player starts out with 50 energy (funds) and either needs to defend the homebase for 120 seconds (2 minutes) or collect 5 coils to win.</p>
          <p>Energy is needed to purchase robots. If there is insufficient funds, a text popup will appear to indicate this. There are two types of robots that can be purchased:<br/><b>Generators:</b> Turbines (50 Energy) which generates 50 energy every few seconds. Energies expire after a certain time.<br/><b>Attackers/Defenders:</b> Basic Robot (100 Energy) which deals 10HP damage to the aliens.</p>
          <video src={walkthru1} autoPlay="true" muted="true" width="100%" loop="true" />

          <p>An Alien starts invading after a certain time, continuously moving left towards the homebase. Aliens can move towards a different lane at random.</p>
          <p>Once an Alien reaches homebase, it deals 10HP damage (shown by the health bar). An Alien also deals 10HP damage to each robot it collides with. After a certain number of hits, the robot is defeated and disappears.</p>
          <video src={walkthru2} autoPlay="true" muted="true" width="100%" loop="true" />

          <p>The Attacker/Defender robot starts to attack once an Alien is within range and continues until it detects no more Aliens. An Attacker/Defender's beams deals 10HP damage to one Alien at a time, and after certain number of hits, the Alien is defeated and disappears.</p>
          <p>For each Alien that is defeated, there is a random chance that a collectible (coil) may be dropped. Collecting a predetermined number of these is one of two win conditions.</p>
          <video src={walkthru3} autoPlay="true" muted="true" width="100%" loop="true" />

          <p>During gameplay, the player can press the <b>ESC</b> key on the keyboard to pause the game. In this screen, there are two options: <u>Resume</u> the game or <u>Quit</u> and go back to the Main Start Screen.</p>
          <img src={pauseScreen} alt="pause" />

          <h3>Win/Lose Conditions</h3>
          <p><b>To Win</b>, one of the following conditions needs to be met:<br/>1) Collect a certain number of collectibles.<br/>2) Time reaches 0.</p>
          <p><b>To Lose</b>: Homebase's HP reaches 0.</p>
          <video src={winlose} autoPlay="true" muted="true" width="100%" loop="true" />
        </div>


      </div>

    );
  }
}

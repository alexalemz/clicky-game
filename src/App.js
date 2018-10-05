import React, { Component } from 'react';
import logo from "./ClickyGameLogo.png";
import './App.css';
import Tile from "./components/Tile";
import characters from "./characters.json";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      topScore: 0,
      characters: characters,
      clicks: {},
      message: "Click an image to begin!"
    }

    this.shuffle();
  }

  // Handle the click event.
  handleClick = (id) => {
    // Check the click status for that tile.
    if (!this.state.clicks[id]) {
      // Set the click status for that tile to true.
      this.state.clicks[id] = true;

      this.setState({
        message: "You guessed correctly!"
      });
      
      this.increaseScore();
    }
    else {
      this.setState({
        message: "You guessed incorrectly!"
      })
      this.resetGame();
    }
      
    this.shuffle();
  }

  increaseScore = () => {
    const newScore = this.state.score + 1;

    this.setState({
      score: newScore
    })

    if (newScore > this.state.topScore) {
      this.setState({
        topScore: newScore
      })
    }

    // Check if they won.
    if (newScore === characters.length) {
      this.setState({
        message: "You won!"
      })
    }
  }

  resetGame = () => {
    this.setState({
      score: 0,
      clicks: {}
    });
  }

  shuffle = () => {
    // console.log("shuffling")

    let shuffled = characters;

    for (let i = 0; i < 10; i++) {
      shuffled.sort( () => Math.random() - 0.5);
    }

    this.setState({
      characters: shuffled
    })
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-black">
          <ul>
            {/* The Logo */}
            <li>
              <img src={logo} className="logo" />
            </li>
            {/* Scoreboard and Message Display */}
            <li>
              <span>{this.state.message}</span>
            </li>
            <li>
              <span>Score: {this.state.score}</span>
              {" | "}
              <span>Top Score: {this.state.topScore}</span>  
            </li>
          </ul>
        </nav>
        <div className="container">
          {/* Tiles */}
          <div className="wrapper">
            {this.state.characters.map(character => {
              return (
                <Tile 
                  key={character.id}
                  image={character.image}
                  name={character.name}
                  handleClick={this.handleClick}
                  id={character.id}
                />
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
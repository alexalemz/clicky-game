import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tile from "./components/Tile";
import characters from "./characters.json";



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      tiles: characters.map(character => {
        return (
          <Tile
            key={character.id}
            image={character.image}
            increaseScore={this.increaseScore}
            shuffle={this.shuffle}
            resetGame={this.resetGame}
          />
        )
      })
    }

    this.shuffle();

    console.log(this.state.tiles)
  }

  increaseScore = () => {
    this.setState({
      score: this.state.score + 1
    })
  }

  resetGame = () => {
    this.setState({
      score: 0,
      tiles: characters.map(character => {
        return (
          <Tile
            key={character.id}
            image={character.image}
            increaseScore={this.increaseScore}
            shuffle={this.shuffle}
            resetGame={this.resetGame}
          />
        )
      })
    });

    this.shuffle();

  }

  shuffle = () => {
    console.log("Shuffle");
    this.setState({
      tiles: this.state.tiles.sort( () => Math.random() - 0.5)
      // tiles: 
    })

    // this.state.tiles.sort( () => Math.random() - 0.5)
    
    console.log(this.state.tiles)
  }

  render() {
    return (
      <div class="container">
        <span>Score: {this.state.score}</span>
        <div className="wrapper">
          {/* {characters.map(character => {
            return (
              <Tile 
                image={character.image}
                increaseScore={this.increaseScore}
              />
            )
          })} */}
          {this.state.tiles}
        </div>
      </div>
    );
  }
}

export default App;

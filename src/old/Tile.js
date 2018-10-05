import React from "react";
import "./Tile.css"

class Tile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      image: this.props.image
    }
  }

  // Handle the click event.
  handleClick = () => {
    console.log("This tile was clicked: ", this.state)
    // console.log(this);

    if (!this.state.clicked) {
      this.props.increaseScore();

      this.setState({
        clicked: true
      })

      this.props.shuffle();
    }
    else {
      this.props.resetGame();
    }
  }

  render() {
    return (
      <div className="tile" onClick={this.handleClick}>
        <img src={this.state.image} />
      </div>
    )
  }
}

export default Tile;
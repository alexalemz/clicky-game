import React from "react";
import "./Tile.css"

class Tile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="tile" onClick={ () => this.props.handleClick(this.props.id) }>
        <img src={this.props.image} 
          alt={this.props.name} 
          // title={this.props.name} 
        />
      </div>
    )
  }
}

export default Tile;
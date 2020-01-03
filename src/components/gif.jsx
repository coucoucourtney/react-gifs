import React, { Component } from 'react';

class Gif extends Component {
  render() {
        const src =`https://media3.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
        <img className="gif" src={src} alt=""/>
    );
  }
}

export default Gif;

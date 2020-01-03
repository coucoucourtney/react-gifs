import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Gif from './gif.jsx';

class GifList extends Component{
  render() {
    return (
      <div className="gif-list">
        {this.props.list.map(gif => {
          return <Gif id={gif.id} key={gif.id} />
        })}
      </div>
    );
    // the above canbe refactored - remove block in div and create separate function then call it in div
      // use {this.functionNameExREnderList()}
      // can also use one line function with implicit return for map function
      // takes key stroke
      // plug into giphy api and populate grid of gifs
  }
}

export default GifList;

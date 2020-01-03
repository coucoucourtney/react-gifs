import React, { Component } from 'react';
// when see things like require etc in package documentation (ex giphy api you know you need to import)
import giphy from 'giphy-api';
import GifList from './gif_list.jsx';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';

class App extends Component {
  // adding states needs 1) constructor 2) super(props) 3) think about the state this.state
  constructor(props){
    super(props);
    this.state = {
      // gif list changes during lifetime of application so:
      gifs: [],
      // selected gif id changes too
      selectedGif: "XbPBuv1gmm4U0dUDeE"
      // this.setState{onKeyUp: } or some listener should go in search bar
    }

  }

  // because the state of the app is changed, you need to create the search function here instead of in search bar component (takes a query and calls api)
  // the search function will be called in the search bar since it is responsible for the change

  search = (query) => {
  // call api
    giphy('M54XGYfVVA1eSj4srdM9JOEKr2JvWPK1').search({
      q: query,
      rating: 'g',
      limit: 10
      }, (err, res) => {
          // must be arrow function (change from original in documentation because the this below needs to refer to same component, if not arrow function this wont)
    // Res contains gif data!
    // console.log(res) give you an array called data with objects inside so need to call result.data to get that array
    // pass search function into props in search bar component in render section below
      this.setState({
        gifs: res.data
      });
    });
    // can call giphy because imported it above and installed package via yarn add giphy-api, got api key from dev section of giphy
    // giphy api gives you search method in documentation
  // the search method will be called in the constructor
  }

  // renders the page with html based on components listed below
  render() {
    //  array of objects moved into state
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGif} />
          </div>
        </div>
        <div className="right-scene">
          <GifList list={this.state.gifs}/>
        </div>
      </div>
    );
  }
}

export default App;

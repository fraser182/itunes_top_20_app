import React, { Component } from 'react';
import Request from '../helpers/request';


class TopSongsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      //Brings back list of all the songs
      songs:[],

    };


  }
  //This is to get the api of songs
  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    const request = new Request();
    request.get(url).then((data) =>
    this.setState({songs:data}))
  }


  render(){
    if (!this.state.songs){
      return <p>Loading Data....</p>;
    }
    return (
      <div>
      <p>Top Songs Container as data has loaded</p>
      </div>
    );
  }
}

export default TopSongsContainer;

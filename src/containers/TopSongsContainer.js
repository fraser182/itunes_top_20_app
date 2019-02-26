import React, { Component } from 'react';
import Request from '../helpers/request';
import Header from '../components/Header.js';
import SongList from '../components/SongList.js'


class TopSongsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      //Brings back list of all the songs
      songs:[]
    };
  }
  //This is to get the api of songs
  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    const request = new Request();
    request.get(url).then((data) =>
    this.setState({songs:data.feed.entry}))
  }

  render(){
    if (!this.state.songs){
      return <p>Loading Data....</p>;
    }
    return (
      <div className="main-container">
      <Header />
      <SongList songs={this.state.songs} />
      </div>
    );
  }
}

export default TopSongsContainer;

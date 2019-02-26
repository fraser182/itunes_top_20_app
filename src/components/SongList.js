import React, {Component} from 'react';
import Song from './Song';
import '../styles/SongList.css';

class SongList extends Component{

render(){
  if(!this.props.songs){
    return <p>Waiting</p>
    }
    const songs = this.props.songs.map((song, index) => {
      return (
        <Song song={song} index={index}/>
      )
    }
  );

  return(
      <div className="song-list">
        <ul>
          {songs}
        </ul>
      </div>
    )
  }
}
export default SongList;

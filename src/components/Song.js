import React from 'react';
import '../styles/Song.css';



const Song = (props) => {
  // console.log('props', props);
  return (

    <div className="song">
    <div className="song-image">
    <img src= { props.image } alt={`${props.title} by ${props.artist}`}/>
    </div>
    <div className="song-info">
    <p>Chart Position: { props.position} </p>
    <p>Title: { props.title} </p>
    <p>Artist: { props.artist} </p>
    </div>
    </div>
  )
}
export default Song;

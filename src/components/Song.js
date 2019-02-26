import React, { Component } from 'react';
import '../styles/Song.css';

const Song = (props) => {
    return (

    <div className="song">
    <p>Chart Position: { props.index +1 } </p>
    <p>Title: { props.song['im:name']['label'] } </p>
    <p>Artist: { props.song['im:artist']['label'] } </p>
    </div>
  )
}
export default Song;

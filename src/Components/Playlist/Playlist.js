import React from 'react';
import {TrackList} from '../TrackList/Tracklist.js';
import './Playlist.css'



export class Playlist extends React.Component {
  constructor(props){
    super(props);

this.handleNameChange = this.handleNameChange.bind(this);
  }

handleNameChange(e){
  this.props.onNameChange(e.target.value);
}

 render() {
return (
  <div className="Playlist">
    <input defaultValue={'New Playlist'} onChange={this.props.handleNameChange} />


    <TrackList tracks ={this.props.playlistTracks} onRemove={this.props.onRemove}/>
    <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
  </div>

)
}
}
/*<div class="Playlist">
  <input value="New Playlist"/>
  <!-- Add a TrackList component -->
  <a class="Playlist-save">SAVE TO SPOTIFY</a>
</div>*/

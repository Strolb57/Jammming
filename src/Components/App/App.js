import React, {Component} from 'react';

import './App.css';
import {SearchBar} from '../SearchBar/SearchBar.js'
import {SearchResults} from '../SearchResults/SearchResults.js'
import {Playlist} from  '../Playlist/Playlist.js'
import Spotify from '../../util/Spotify.js'




class App extends React.Component {
  constructor(props) {
   super(props);
  this.state = {
  searchResults:[],
  playlistName:  'New Playlist',
  playlistTracks: [{name:'',artist:'',album:''},{name:'',artist:'',album:''},{name:'',artist:'',album:''}],
  };





this.addTrack = this.addTrack.bind(this);
this.removeTrack = this.removeTrack.bind(this);
this.updatePlaylistName = this.updatePlaylistName.bind(this);
this.savePlaylist = this.savePlaylist.bind(this);
this.search = this.search.bind(this);
Spotify.getAccessToken()
};

search(term){
  Spotify.search(term)

}

savePlaylist(track){
  Spotify.savePlaylist(this.setState({playlistTracks: track}))


}
addTrack(track){

  if (this.state.playlistTracks.id === this.props.tracks.id) {return null}
  else { return  this.setState({playlistTracks: this.state.playlist.push(track)})}


}
removeTrack(track){
 if (this.state.playlistTrack.id === this.props.tracks.id) {
   return this.setState({playlistTracks: this.state.playlist.slice(track)})
 } else {
   return null
 }

}


updatePlaylistName(name){
  this.setState({playlistName: name})

}

  render() {
    return (
 <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <div className="App">
          <SearchBar onSearch={this.search}/>
      <div className="App-playlist">
          <SearchResults
          searchResults={this.state.searchResults}
          onAdd={this.addTrack}/>
          <Playlist
          onSave={this.savePLaylist}
          onNameChange={this.updatePlaylistName}
          playlistName={this.state.playlistName}
          playlistTracks={this.state.playlistTracks}
          onRemove={this.removeTrack}/>
      </div>
    </div>
  </div>
)}


}
export default App


//<div>
  //<h1>Ja<span class="highlight">mmm</span>ing</h1>
  //<div class="App">
    //<!-- Add a SearchBar component -->
    //<div class="App-playlist">
      //<!-- Add a SearchResults component -->
      //<!-- Add a Playlist component -->
    //</div>
  //</div>
//</div>

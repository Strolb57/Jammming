import React from 'react';
import {TrackList} from '../TrackList/Tracklist.js'
import './SearchResults.css'



export class SearchResults extends React.Component {
 render() {
return (
  <div className="SearchResults">
    <h2>Results</h2>
    <TrackList tracks = {this.props.searchResults} onAdd = {this.props.onAdd}/>
  </div>
)
    }
  }
/*
<div className="SearchResults">
  <h2>Results</h2>
  <!-- Add a TrackList component -->
</div> */

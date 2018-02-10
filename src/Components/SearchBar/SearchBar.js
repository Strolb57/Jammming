import React from 'react';
import './SearchBar.css';
import App from '../App/App.js'




export class SearchBar extends React.Component {
  constructor(props){
    super(props);

    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

handleTermChange(e){
  this.props.onSearch(e.target.value)

}
search(){
  this.setState(this.props.onSearch)
  }

render() {
    return (

  <div className="SearchBar">
  <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange}/>
  <a>SEARCH</a>
</div>
)
}}

/*
<div class="SearchBar">
  <input placeholder="Enter A Song, Album, or Artist" />
  <a>SEARCH</a>
</div>
*/

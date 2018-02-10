import React from 'react';
import './Track.css';




export class Track extends React.Component{
  constructor(props){
    super(props);
    //this.state = {
      //isRemoval: 'true'
    //}
    this.removeTrack = this.removeTrack.bind(this);
    this.addTrack = this.addTrack.bind(this);
    this.renderAction = this.renderAction.bind(this);
  }

addTrack(){
  let track = this.props.track;
  track = this.props.onAdd

}
removeTrack(){
  let track = this.props.track;
  track = this.props.onRemove
}

renderAction(){


      if (this.props.isRemoval) {
         return (<a className ="Track-action" onClick={this.removeTrack}>-</a>)
      } else {
        return (<a className ="Track-action" onClick={this.addTrack}>+</a>)
      }

}




  render(){
    return(
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.name}</h3>
          <p>{this.props.artist} | {this.props.album}</p>
        </div>

        <div>
        {this.renderAction()}
        </div>

      </div>

    )
  }

}


/*
<div class="Track">
  <div class="Track-information">
    <h3><!-- track name will go here --></h3>
    <p><!-- track artist will go here--> | <!-- track album will go here --></p>
  </div>
  <a class="Track-action"><!-- + or - will go here --></a>
</div> */

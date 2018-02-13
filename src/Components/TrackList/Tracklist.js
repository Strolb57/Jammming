import React from 'react';
import './Tracklist.css';
import {Track} from '../Track/Track';

export class TrackList extends React.Component{
  render()
  {
    return (
      <div className="TrackList">
        {
          this.props.tracks.map((track, id) =>
          <Track
          track={track}
          key = {id}
          onAdd = {this.props.onAdd}
          onRemove = {this.props.onRemove}

          />)
        }
    </div>
  );

  }
}

/*render()
  {
    return (
      <div className="Tracklist">
          {
            this.props.tracks.map(track => <Track track={track}
              onAdd={this.props.onAdd}
              onRemove={this.props.onRemove}
              isRemoval={this.props.isRemoval}
            />)
          }
      </div>
    );
  }
}


/*<div className="TrackList">
    <!-- You will add a map method that renders a set of Track components  -->
</div>*/

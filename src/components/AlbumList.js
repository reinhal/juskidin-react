import React from 'react';
import './styles/AlbumList.css';

export default class AlbumList extends React.Component {
  render() {
    return (
      <div className="ui segment album-list">
        <div className="ui one column very relaxed grid">
          <div className="column">
            <div className="ui list">
              <div className="item">Album One</div>
              <div className="item">Album Two</div>
              <div className="item">Album Three</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
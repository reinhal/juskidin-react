import React from 'react';
import './styles/AlbumList.css';

export default class AlbumList extends React.Component {
  render() {
    return (
      <div className="ui grid">
        <div className="four wide column album-section">
          <div className="ui vertical fluid tabular menu album-tab">
            <a className="item active" href="/">
              Deafult Album
            </a>
            <a className="item" href="/">
              Album One
            </a>
            <a className="item" href="/">
              Album Two
            </a>
            <a className="item" href="/">
              Album Three
            </a>
          </div>
        </div>
        <div className="twelve wide stretched column album-section">
          <div className="ui segment">
            This is an stretched grid column. This segment will always match the tab height
          </div>
        </div>
      </div>
    );
  }
}
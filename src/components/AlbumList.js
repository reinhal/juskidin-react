import React from 'react';
import UploadedImage from './UploadedImage';
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
            <UploadedImage />
          </div>
        </div>
      </div>
    );
  }
}

import React from 'react';
import axios from 'axios';

export default class UploadImage extends React.Component {
  constructor(props) {
    super(props); 
    
    this.state= {
      imageURL: ''
    };

    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  handleUploadImage(e) {
    e.preventDefault();

    const imageData = new FormData();
    imageData.append('new-image', this.uploadInput.files[0]);
    imageData.append('photo-title', this.)
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} id="imageUploadForm" className="ui form">
          <div className="field">
            <label>Title</label>
            <input type="text" name="photo-title" placeholder="Enter a title" />
          </div>
          {/* <div className="field">
            <label>Notes</label>
            <input type="text" name="notes" placeholder="Share some notes" />
          </div>
          <div className="field">
            <label>Album</label>
            <input type="text" name="album" placeholder="Use an existing album or create a new one" />
          </div> */}
          <div className="field">
            <label>Image</label>
            <input type="file" name="new-image" placeholder="Upload a photo" />
          </div>
          <button className="ui button" type="submit">Upload</button>
        </form>
      </div> 
    );
  }
} 
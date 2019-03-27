import React from 'react';

export default class UploadImage extends React.Component {
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Title</label>
            <input type="text" name="photo-title" placeholder="Enter a title" />
          </div>
          <div className="field">
            <label>Notes</label>
            <input type="text" name="notes" placeholder="Share some notes" />
          </div>
          <div className="field">
            <label>Album</label>
            <input type="text" name="album" placeholder="Use an existing album or creat a new one" />
          </div>
          <div className="field">
            <label>Image</label>
            <input type="file" name="Image" placeholder="Upload a photo" />
          </div>
          <button className="ui button" type="submit">Upload</button>
        </form>
      </div> 
    );
  }
}
import React from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../config';

export default class UploadImage extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      title: '',
      notes: '',
      album: '',
      image: ''
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
    // this.onChange = this.onChange.bind(this);

  }

  onFormSubmit(e) {
    e.preventDefault();
    let imageFormObj = new FormData();
    
    imageFormObj.append('title', e.target.title)
    imageFormObj.append('notes', e.target.notes)
    imageFormObj.append('album', e.target.album)
    imageFormObj.append('image', e.target.files[0])

    console.log(imageFormObj);
    this.setState({
      image: URL.createObjectURL(e.target.files[0])
    });

    axios.post(`${API_BASE_URL}/uploads`, imageFormObj)
      .then((data) => {
        if (data.data.success) {
          alert('Image has been successfully uploaded');
        }
      })
      .catch((err) => {
        alert('Oops! Something went wrong')
      })
  }


  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} id="imageUploadForm" className="ui form">
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
            <input type="text" name="album" placeholder="Use an existing album or create a new one" />
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
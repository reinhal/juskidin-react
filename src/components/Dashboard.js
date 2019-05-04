import React, { Component } from 'react';
import AlbumList from './AlbumList';
import AlbumMenu from './AlbumMenu';
import Spinner from './Spinner';
import UploadImageButton from './UploadImageButton';
import UploadedImage from './UploadedImage';
import './styles/Dashboard.css';
import { API_BASE_URL } from '../config';

export default class Dashboard extends Component {

  state = {
    uploading: false,
    uploadedImages: []
  }

  onChange = e => {
    const files = Array.from(e.target.files);
    this.setState({ uploading: true });

    const formData = new FormData();

    files.forEach((file, i) => {
      formData.append(i, file)
      console.log(formData);
    });

    fetch(`${API_BASE_URL}/image-upload`, {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(uploadedImages => {
      this.setState({
        uploading: false, 
        uploadedImages
      });
    });
  }

  removeImage = id => {
    this.setState({
      uploadedImages: this.state.uploadedImages.filter(uploadedImage => uploadedImage.public_id !== id)
    })
  }

  render() {
    const { uploading, uploadedImages } = this.state;

    const content = () => {
      switch(true) {
        case uploading: 
          return <Spinner />
        case uploadedImages.length > 0:
          return <UploadedImage uploadedImages={uploadedImages} removeImage={this.removeImage} />
        default:
          return <UploadImageButton onChange={this.onChange} />
      }
    }
    return (
      <div>
        <h1 className="juskidin-header" style={{ textAlign: "center"}}>JusKidin</h1>
        <AlbumMenu />
        <AlbumList />
        {content()}
      </div>
    )
  }
}
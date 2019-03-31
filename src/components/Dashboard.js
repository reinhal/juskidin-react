import React, { Component } from 'react';
// import AlbumList from './AlbumList';
import AlbumMenu from './AlbumMenu';
import Spinner from './Spinner';
import UploadImageButton from './UploadImageButton';
import { API_BASE_URL } from '../config';
import UploadedImage from './UploadedImage';

export default class Dashboard extends Component {

  state = {
    uploading: false,
    images: []
  }

  onChange = e => {
    const files = Array.from(e.target.files);
    this.setState({ uploading: true });
    const formData = new FormData();

    files.forEach((file, i) => {
      formData.append(i,file)
    })

    fetch(`${API_BASE_URL}/image-upload`, {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(images => {
      this.setState({
        uploading: false, 
        images
      });
    });
  }

  removeImage = id => {
    this.setState({
      images: this.state.images.filter(image => image.public_id !== id)
    })
  }

  render() {
    const { uploading, images } = this.state

    const content = () => {
      switch(true) {
        case uploading: 
          return <Spinner />
        case images.length > 0:
          return <UploadedImage images={images} removeImage={this.removeImage} />
        default:
          return <UploadImageButton onChange={this.onChange} />
      }
    }
    return (
      <div>
        <h1 className="juskidin-header" style={{ textAlign: "center"}}>JusKidin</h1>
        <AlbumMenu />
        {content()}
      </div>
    )
  }
}
import React from 'react';
import UploadForm from './UploadForm';
import AlbumList from './AlbumList';
import NoPhotoMessage from './NoPhotoMessage';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        Dashboard
        <UploadForm />
        <NoPhotoMessage />
        <AlbumList />
      </div>
    )
  }
}

export default Dashboard;
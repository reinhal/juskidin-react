import React from 'react';
import AlbumList from './AlbumList';
import AlbumMenu from './AlbumMenu';
import UploadImage from './UploadImage';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h1 className="juskidin-header" style={{ textAlign: "center"}}>JusKidin</h1>
        <AlbumMenu />
        <UploadImage />
        <AlbumList />
      </div>
    )
  }
}

export default Dashboard;
import React from 'react';
import AlbumList from './AlbumList';
import AlbumMenu from './AlbumMenu';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h1 className="juskidin-header" style={{ textAlign: "center"}}>JusKidin</h1>
        <AlbumMenu />
        <AlbumList />
      </div>
    )
  }
}

export default Dashboard;
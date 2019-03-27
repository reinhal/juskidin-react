import React from 'react';

export default class AlbumMenu extends React.Component {
  render() {
    return (
      <div className="ui menu">
        <div className="item">
          <div className="ui icon input">
            <input type="text" placeholder="Search..." />
            <i className="search icon"></i>
          </div>
        </div>
        <div className="right item" style={{ padding: "0px" }}>
          <a className="item" href="/">Add Image</a>
          <a className="item" href="/">Account</a>
          <a className="item" href="/">Log Off</a>
        </div>
      </div>
    );
  }
}
import React from 'react';

export default class AlbumMenu extends React.Component {
  render() {
    return (
      <div className="ui menu">
        <a className="item">Log Off</a>
        <a className="item">Account</a>
        <div className=" right item">
          <div className="ui icon input">
            <input type="text" placeholder="Search..." />
            <i className="search icon" />
          </div>
        </div>
      </div>
    );
  }
}
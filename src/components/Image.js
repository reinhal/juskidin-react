import React from 'react';

class Image extends React.Component {
  
  render() {
    const { alt_description, urls} = this.props.image;
    return (
      <div className="column">
        <div className="ui segment">
          <img alt={alt_description} src={urls.regular}/>
        </div>
      </div>
    );
  }
}

export default Image;
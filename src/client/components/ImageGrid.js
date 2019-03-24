import React from 'react';
import Image from './Image';

class ImageGrid extends React.Component {
  render() {
    return (
      <div>
        <div className="ui three column grid">
          <Image />
          <Image />
          <Image />
        </div>
        <div className="ui three column grid">
          <Image />
          <Image />
          <Image />
        </div>
      </div>
    );
  }
}

export default ImageGrid;
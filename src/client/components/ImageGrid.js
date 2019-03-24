import React from 'react';
import Image from './Image';
import '../styles/ImageGrid.css';


const ImageGrid = props => {
  console.log(props);
  const images = props.images.map((image) => {
    return <Image key={image.id} image={image} />
  });

  return <div className="ui three column grid image-grid">{images}</div>
}

export default ImageGrid;
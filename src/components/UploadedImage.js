import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

export default props => 
  props.uploadedImages.map((uploadedImage, i) =>
    <div key={i} className='fadein'>
      <div 
        onClick={() => props.removeImage(uploadedImage.public_id)} 
        className='delete'
      >
        <FontAwesomeIcon icon={faTimesCircle} size='2x' />
      </div>
      <img src={uploadedImage.secure_url} alt='' />
    </div>
  )
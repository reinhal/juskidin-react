
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'

export default class UploadImageButton extends React.Component {
  render(props) {
    return (
      <div className='buttons fadein'>
        <div className='button'>
          <label htmlFor='single'>
            <FontAwesomeIcon icon={faImage} color='#3B5998' size='10x' />
          </label>
          <input type='file' id='single' onChange={props.onChange} /> 
        </div>
      </div>
    );
  }
}


// import React, { Component } from 'react';
// import {API_BASE_URL} from '../config';

// export default class UploadImage extends React.Component {
//   render() {
//     return (
//       <div className="ui segment">
//         <form onSubmit={this.onFormSubmit} id="imageUploadForm" className="ui form">
//           <div className="field">
//             <label>Title</label>
//             <input type="text" name="photo-title" placeholder="Enter a title" />
//           </div>
//           <div className="field">
//             <label>Notes</label>
//             <input type="text" name="notes" placeholder="Share some notes" />
//           </div>
//           <div className="field">
//             <label>Album</label>
//             <input type="text" name="album" placeholder="Use an existing album or create a new one" />
//           </div>
//           <div className="field">
//             <label>Image</label>
//             <input type="file" name="Image" placeholder="Upload a photo" />
//           </div>
//           <button className="ui button" type="submit">Upload</button>
//         </form>
//       </div> 
//     );
//   }
// }
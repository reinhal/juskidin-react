import React from 'react';

class Modal extends React.Component {
  render() {
    return (
      <div className="ui active basic modal">
        <div className="header">How to Use JusKidin</div>
        <div className="content">
          <p>Organize Memories, School Work, Artwork into Drawers</p>
          <p>
            Think of drawers as topics and containers. They are simply an 
            organization tool for your images or digitized versions of your 
            children's work, activities and creations. Go to the Drawers page, 
            click on the drawer button to upload images and add notes.
          </p>
        </div>
        <div class="actions">
          <div class="ui red basic cancel inverted button">
            <i class="remove icon"></i>
            Got it!
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
import React from 'react';
import '../styles/LandingPage.css';
import ImageGrid from './ImageGrid';
import Button from './Button';
import unsplash from '../api/unsplash';

class LandingPage extends React.Component {
  state = { images: [] };


  getImages = async () => {
    const term = 'children';
    const response = await unsplash.get('/search/photos', {
      params: { 
        query: term,
        per_page: 6,
        orientation: 'landscape'
      }
    });

    this.setState({ images: response.data.results });
  }
  
  componentDidMount() {
    this.getImages();
  }


  render() {
    return (
      <div className="landing-page">
        <div>
          <h1 className="juskidin-header">JusKidin</h1>
          <h2>Support your children.  Keep all the memories.</h2>
          <p className="juskidin-description">
            Create profiles for each of your children. 
            Connect to relevant web resources based on your child's age. 
            Upload pictures you take of your child's artwork, schoolwork, 
            sporting events and other special memories.
          </p>
        </div>
        <Button text="Here's How" />
        <ImageGrid onload={this.getImages} images={this.state.images}/>
        <Button text="Login" />
        <div>
          <p>Need an Account? Sign Up</p>
        </div>
      </div>
    );
  }
}

export default LandingPage;
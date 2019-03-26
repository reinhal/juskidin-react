import React from 'react';
import {NavLink} from 'react-router-dom';
import './styles/LandingPage.css';
import ImageGrid from './ImageGrid';
import Button from './Button';
import unsplash from '../api/unsplash';

class LandingPage extends React.Component {
  constructor(props, context) {
    super(props, context);
 
    this.state = { images: [] };
  }


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
          <h2>Love your children.  Keep all the memories.</h2>
          <p className="juskidin-description">
            Simply upload photos of your children's lives: from adorable moments, to sporting events, 
            school projects, or artwork. Choose to add a title and description.  Tag the photo with keywords.  
            Later enjoy the memories by searching for tags or drawers.
          </p>
        </div>
        <p><NavLink to="/dashboard">Dashboard</NavLink></p>
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
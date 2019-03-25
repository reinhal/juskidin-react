import React from 'react';
import LandingPage from './LandingPage';

class App extends React.Component {
  state = { data: null }

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }

  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    return (
      <div className="ui container">
        <LandingPage />
        <p>{this.state.data}</p>
      </div>
    );
  }
}

export default App; 
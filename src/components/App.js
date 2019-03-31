import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './Main';

class App extends React.Component {
  render() {
    return (
      <Router>
         <div id='root' className="ui container">
          <Main />
        </div>
      </Router>
    );
  }
}

export default App; 
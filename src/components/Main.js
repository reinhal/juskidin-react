import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './LandingPage';
import Dashboard from './Dashboard';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/'
          component={(props) => <LandingPage {...props.match} />}
          />
          <Route exact path='/dashboard'
          component={(props) => <Dashboard {...props.match}/>}
          />
        </Switch>
      </div>
    );
  }
}
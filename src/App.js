import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//Components
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import StatisticsContainer from './components/StatisticsContainer';

//Assets
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className='container'>
            <Switch>
              <Route path='/dashboard'component={Dashboard} />
              <Route path='/statistics'component={StatisticsContainer} />
              <Route path='/' component={Login} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

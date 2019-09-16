import React, { Component } from 'react';
import {Link} from 'react-router-dom';
//Components
import TechContainer from './../TechContainer/TechContainer';
import AppBar from './../AppBar';
import Header from './../Header';
//Assets
import {Header as Title, Icon, Label, Divider, Message } from 'semantic-ui-react';

import './css/dashboard.css';
import Menu from '../Menu';

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: JSON.parse(sessionStorage.getItem('user')) || {},
    }
  }

  render() {
    return (
      <div className='dashboard'>
        {
          sessionStorage.getItem('user') ?
          <>
            <AppBar user={
              JSON.parse(sessionStorage.getItem('user'))
            }/>
            <Header />

            <Menu/>

            <Divider horizontal>
            <Title as='h3' color='grey'>
                <Icon name='th large'/>
                TECHNOLOGIES
              </Title>
            </Divider>

            <TechContainer/>

          </> :
          <div className='error_message'>
            <Message negative compact size='big'>
              <Message.Header>
                <Icon name='ban'/> We're sorry, you need to login first.
              </Message.Header>
                <p>
                  <Label color='green'>
                    <Icon name='sign-in alternate'/>
                    <Link to='/'>Go to login page</Link>
                  </Label>
                </p>
            </Message>
          </div>
        }
      </div>
    );
  }
}

export default (Dashboard);

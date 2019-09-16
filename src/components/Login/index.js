import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Button, Header, Message, Form, Icon} from 'semantic-ui-react';
import {searchUser} from './../../actions/fetchUser';
import './css/login.css';
import logo from './../../assets/greaterThan.png';

class Login extends Component {

    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
            error: false
        }
    }

    handleSubmit = (e) => {
      e.preventDefault();
      const {username, password} = this.state;
      if (username !== '' || password !== '') {
        searchUser(username).then( data => {
          if (data[0].password === password) {
            const serializedUser = JSON.stringify(data[0]);
            sessionStorage.setItem('user', serializedUser);
            this.props.history.push('/dashboard');
          } else {
            this.setState({
              error: true
            });
          }
        });
      } else {
        this.setState({
          error: true
        })
      }
    }

    handleInputChange = (event) => {
        const {name, value} = event.target;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className='login'>
                <Header as='h1' attached='top' image={logo} content='TECH TRACKER' />
                <Form onSubmit={this.handleSubmit} className='attached fluid segment'>
                    <div className='form-group'>
                        <Form.Input
                          type="text"
                          label='Username'
                          name="username"
                          placeholder='Enter username'
                          onChange={this.handleInputChange}/>
                    </div>
                    <div className='form-group'>
                        <Form.Input
                          type="password"
                          label='Password'
                          name="password"
                          placeholder='Enter password'
                          onChange={this.handleInputChange}/>
                    </div>
                    <div className='button-group'>
                        <Button icon='sign-in' content='Sign in' color='green'/>
                        <Button icon='signup' content='Sign up'/>
                    </div>
                </Form>
                {
                    this.state.error &&
                    <Message attached='bottom' negative>
                      <Icon name='exclamation triangle'/>
                      Hubo un error con los datos.
                    </Message>
                }

            </div>
        );
    }
}

export default withRouter(Login);

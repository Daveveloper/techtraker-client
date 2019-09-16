import React, { Component } from 'react';
import {connect} from 'react-redux';
import {insertTech} from './../../actions/insertTech';
import PropTypes from 'prop-types';
//Assets
import { Icon, Form, Button, Message } from 'semantic-ui-react';

class AddTech extends Component {

  state = {
    error: false,
    success: false,
  };

  clear = () => (document.getElementById('newTech').reset());

  handleDismissSuccess = () => {
    this.setState({
      success: true,
    });
    setTimeout(() => {
      this.setState({success: false})
    }, 5000);
  }

  handleDismissError = () => {
    this.setState({
      error: true,
    });
    setTimeout(() => {
      this.setState({error: false})
    }, 4000);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    const newTech = {
      name: data.get('name'),
      likes: 0,
      category: data.get('category'),
      comments: []
    }

    const found = this.props.techs.find((tech) => {
      return tech.name.toLowerCase() === newTech.name.toLowerCase();
    });

    if (!found && newTech.name !== '') {
      this.props.insertTech(newTech)
                .then( result => {
                  this.clear();
                  this.handleDismissSuccess();
                }).catch( error => {
                  this.handleDismissError();
                });
    }else{
      this.handleDismissError();
    }
  };

render() {
    const {error, success} = this.state;
    return (
      <div>
        <Form onSubmit={this.handleSubmit} id='newTech'>
          <Form.Field>
            <Form.Input fluid label='Technology' placeholder='Enter a name...' name='name'/>
          </Form.Field>
          <Form.Field label='Category' control='select' name='category'>
            <option value='Programming Language'>Programming Language</option>
            <option value='Framework'>Framework</option>
            <option value='Framework'>Library</option>
            <option value='Other'>Other</option>
          </Form.Field>
          <Button color='green'>
            <Icon name='save'/> Save
          </Button>
        </Form>
        {
          error && <Message error icon='x' onDismiss={this.handleDismissError}
                      content='Something went wrong, maybe the tecnology already exist.' compact/>
        }
        {
          success &&
          <Message positive icon='check square' onDismiss={this.handleDismissSuccess} content='Technology saved.' compact/>
        }
      </div>
    );
  }
}

AddTech.propTypes = {
  insertTech: PropTypes.func.isRequired,
}

export default connect(null, {insertTech})(AddTech);

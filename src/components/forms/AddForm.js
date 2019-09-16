import React, {Component} from 'react'
import { Form,TextArea, Button, Icon} from 'semantic-ui-react';
import './styles.css';

class AddForm extends Component {

  constructor() {
    super();
    this.state ={
      user : JSON.parse(sessionStorage.getItem('user')) || {}
    }
  }

  handleHide = () => (false);

  clear = () => (document.getElementById('add_form').reset());

  handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    this.props.handleOnSubmit(data);
    this.clear();
  };

  render(){

    return (
      <div className='add_form'>
        <Form onSubmit={this.handleSubmit} id='add_form'>
          <Form.Field>
            <input id='user' name='user' type='hidden' value={this.state.user.name}/>
          </Form.Field>
          <Form.Field>
            <TextArea placeholder='Comments' id='body' name='body' onChange={this.handleInputChange} ref='body'/>
          </Form.Field>
          <Button color='green' size='mini'><Icon name='add'/>Add</Button>
        </Form>
      </div>
    );
  }
}

export default AddForm;

import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import AddTech from './../AddTech';
import { Divider, Header as Title, Icon, Modal, Button} from 'semantic-ui-react';
import {connect} from 'react-redux';
import './css/menu.css';

class Menu extends Component {
  goToStatistics = () => (this.props.history.push('/statistics'));
  render() {
    return (
      <div className='menu'>
        <Divider horizontal>
          <Title as='h4' color='grey'>
            <Icon name='cogs'/>
            ACTIONS
          </Title>
        </Divider>

        <div className='menu-items'>

          <Modal size='small' trigger={
            <Button icon='add' color='teal' labelPosition='left' circular content='Add new technology'/>
          } closeIcon>
            <Title content='New technology' as='h1'/>
            <Modal.Content>
              <AddTech techs={this.props.techs}/>
            </Modal.Content>
          </Modal>

          <Button icon='line graph' color='black' labelPosition='left' circular content='Statistics' onClick={this.goToStatistics}/>

          <Modal trigger={
            <Button icon='info' labelPosition='left' circular content='Instructions'/>
          } closeIcon>
            <Title content='How to use?' as='h1'/>
            <Modal.Content>
              <div>
                INFO
              </div>
            </Modal.Content>
          </Modal>
        </div>

      </div>
    )
  }
}
const mapStateToProps = state => ({
  techs: state.techs
})

export default connect(mapStateToProps,null)(withRouter(Menu));

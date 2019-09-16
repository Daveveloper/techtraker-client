import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom'
import {fetchUserTechs} from './../../actions/fetchUserTechs';
import { connect } from 'react-redux';

//Assets
import logo from './../../assets/greaterThan.png';
import './css/appbar.css';
import 'semantic-ui-css/semantic.min.css';
import { Icon, Popup, Button } from 'semantic-ui-react';

class AppBar extends Component{

  componentDidMount() {
    this.props.fetchUserTechs(this.props.user.id)
  }

  signOut = () => {
    sessionStorage.clear();
    this.props.history.push('/');
  }

  render(){
    const {user} = this.props;

    return (
      <nav className='app-bar'>
        <div className='logo_content'>
        <img src={logo} alt="logo accenture" className='logo' width='10'/>
        <strong> Tech Tracker</strong>
        </div>
        <div className='user' tabIndex='0'>
          <span>
            {  user ? user.name : 'Sin datos' }
          </span>
          <Popup
          content={
            <Button icon labelPosition='right' compact color='blue' onClick={this.signOut}>
              <Icon name='sign out'/>
              Sign out
            </Button>
          }
          trigger={
            <Icon name='user circle' size='big' onClick={this.showUserInfo}/>
          }
          position='bottom right'
          on='focus'/>
        </div>
      </nav>
    );
  }
};

AppBar.propTypes = {
  user: PropTypes.object.isRequired,
};

export default connect(null, {fetchUserTechs})(withRouter(AppBar));

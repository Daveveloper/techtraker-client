import React, { Component } from 'react';
import TechCard from './TechCard';
import {connect} from 'react-redux';
import {fetchTechs} from './../../actions/fetchTechs';
import {Message, Icon, Input} from 'semantic-ui-react';
import { getTechnologies } from '../../selectors/technologies';
import PropTypes from 'prop-types';

import './css/styles.css';

class TechContainer extends Component {
  constructor() {
    super();
    this.state = {
      filtered: [],
    }
  }

  componentDidMount() {
    this.props.fetchTechs();
    this.setState({
      filtered: this.props.techs
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      filtered: nextProps.techs
    })
  }

  handleChange = (e) => {
    let currentList = [];
    let newList = [];

    if (e.target.value !== '') {
      currentList = this.props.techs;
      newList = currentList.filter(item => {
        debugger;
        const lc = item.name.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lc.includes(filter)
      });
    } else {
      newList = this.props.techs;
    }

    this.setState({
      filtered: newList
    });
  }

  render() {
    const {filtered} = this.state;
    console.log(this.state.filtered)
    return (
      <div>
        <div className='search-wrapper'>
        <Input
          icon={<Icon name='search' inverted circular link />}
          placeholder='Search technology...'
          onChange={this.handleChange}/>
        </div>

      <section className='tech-container'>
      {
        filtered ?
        filtered.map(function(objTech) {
          return <TechCard techs={objTech} key={objTech.name}/>
        }) :
        <Message compact>
          <Icon name='circle notched' loading />
          <Message.Content>
            <Message.Header>Just one second</Message.Header>
            We are fetching that content for you.
          </Message.Content>
        </Message>
      }
      </section>
      </div>
    );
  }
}

TechContainer.defaultProps = {
  techs:[],
}

TechContainer.propTypes = {
  techs: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  techs: getTechnologies(state),
});

const mapDispatchToProps = {fetchTechs};

export default connect(mapStateToProps, mapDispatchToProps)(TechContainer);

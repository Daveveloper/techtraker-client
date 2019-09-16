import React, { Component } from 'react'

class TitleCard extends Component {
  render() {
    const {name, category} = this.props;
    return (
      <div className='tech-name'>
        <h1 className='title-tech'>{name}</h1>
        <small><span>Category:</span> {category}</small>
      </div>
    )
  }
}

export default TitleCard;

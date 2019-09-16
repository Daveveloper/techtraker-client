import React, { Component } from 'react'
import {Label} from 'semantic-ui-react';

class Counter extends Component {
  render() {
    const {likes} = this.props;
    return (
      <div className='counter'>
        <Label color='teal' size='big' floating>
          {likes}
        </Label>
      </div>
    )
  }
}

export default Counter;

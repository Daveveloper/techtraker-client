import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Comment} from 'semantic-ui-react';
import avatar from './../../assets/matt.jpg';
import './css/comments.css';

class FeedContainer extends Component {

  render() {
    const {comments} = this.props;

    return (
      <>
        {
          comments &&
          comments.map( comment => {
            return(
              <Comment.Group key={comment.key}>
                <Comment>
                  <Comment.Avatar src={avatar} />
                  <Comment.Content>
                    <Comment.Author as='a'>{comment.user}</Comment.Author>
                    <Comment.Metadata>
                      <div>{comment.date}</div>
                    </Comment.Metadata>
                    <Comment.Text>
                      {comment.body}
                    </Comment.Text>
                  </Comment.Content>
                </Comment>
              </Comment.Group>
            )
          })
        }
      </>
    )
  }
}

FeedContainer.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default FeedContainer;

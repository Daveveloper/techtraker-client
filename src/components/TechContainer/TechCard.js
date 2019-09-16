import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Icon, Loader, Confirm, Modal, Header, Message} from 'semantic-ui-react';
import FeedContainer from './../FeedContainer';
import AddForm from './../forms/AddForm';
import Counter from './Counter';
import TitleCard from './TitleCard';
import {connect} from 'react-redux';
import {insertComment} from './../../actions/insertComment';
import {updateLikes} from './../../actions/updateLikes';
import {addNewInList} from './../../actions/insertListTech';
import {removeFromList} from './../../actions/deleteTechFromList';
import {remove, currentDate, create_UUID, removeObject} from './../../api/utilities';

class TechCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addModal: false,
      commentsModal: false,
      message: '',
      alert: false,
      visible: false,
      user: JSON.parse(sessionStorage.getItem('user')) || {},
    }
  }

  openAlert = () => (this.setState({alert: true}));
  closeAlert = () => (this.setState({alert: false}));

  handleOpenAddModal = () => (this.setState({addModal: true}));
  handleCloseAddModal = () => (this.setState({addModal: false}));
  handleOpenCommentsModal = () => (this.setState({commentsModal: true}));
  handleCloseCommentsModal = () => (this.setState({commentsModal: false}));

  handleDismiss = () => {
    this.setState({visible: true});
    setTimeout(() => {
      this.setState({visible: false})
    }, 5000);
  }

  handleOnSubmit = (data) => {
    const {likes, id, name, comments} = this.props.techs;
    const {technologies} = this.props.list;

    const updComment = {
      key: create_UUID(),
      idUser: this.state.user.id,
      user: data.get('user'),
      body: data.get('body'),
      date: currentDate(),
    }

    const comment = {
      comments: [...comments, updComment],
    }

    const updatedLike = {
      likes: Number(likes + 1),
    }

    const updateList = {
      technologies: [...technologies, name]
    }

    this.props.addNewInList(updateList, this.props.list.id);
    this.props.insertComment(comment, id);
    this.props.updateLikes(updatedLike, id).then(result => {
      if (result.error) {
        this.setState({
          addModal: false,
          message: "Something went wrong!"
        });
        this.handleDismiss();
      }
      this.setState({
        addModal: false,
        message: "Technology added to your list."
      });
      this.handleDismiss();
    });
  }

  unsubscribeTech = () => {
    const tech = this.props.techs;
    const {technologies, id} = this.props.list;
    const newList = remove(technologies, tech.name);
    const ncList = removeObject(tech.comments, this.state.user.id);
    let updatedLike = {};

    const commentsList = {
      comments: ncList,
    }

    const updTechs = {
      technologies: newList,
    }

    if (tech.likes > 0) {
      updatedLike = {
        likes: Number(tech.likes - 1)
      }
      this.props.updateLikes(updatedLike, tech.id);
    }
    this.props.insertComment(commentsList, tech.id);
    this.props.removeFromList(updTechs, id);
    this.closeAlert();
  }

  findTech = (list, name) => {
    return list.technologies.includes(name);
  }

  render(){
    const {techs:{id, name, likes, category, comments}} = this.props;
    return (
      <article className='tech-card'>
        {
          this.props.list ?
            <>
            <div className='action-buttons'>
              <Modal trigger={
                <Button color='black' size='tiny' animated='vertical'
                  onClick={this.handleOpenAddModal} disabled={this.findTech(this.props.list, name)}>
                  <Button.Content visible>
                    <Icon name='add' size='large'/>
                  </Button.Content>
                  <Button.Content hidden>Add</Button.Content>
                </Button>}
                open={this.state.addModal}
                onClose={this.handleCloseAddModal} closeIcon>
                  <Header content={name}/>
                  <Modal.Content>
                    <AddForm handleOnSubmit={this.handleOnSubmit}/>
                  </Modal.Content>
                </Modal>

              <Button animated color='black' size='small' onClick={this.openAlert} disabled={!this.findTech(this.props.list, name)}>
                <Button.Content visible><Icon name='minus' size='large'/></Button.Content>
                <Button.Content hidden>Remove</Button.Content>
              </Button>
              <Confirm
                open={this.state.alert}
                header='Tech tracker'
                content="Are you sure to delete this technology from your list?"
                cancelButton='Never mind'
                confirmButton="Let's do it"
                onCancel={this.closeAlert}
                onConfirm={this.unsubscribeTech}/>

              <Modal trigger={
                <Button color='black' size='tiny' animated='vertical' onClick={this.handleOpenCommentsModal} disabled={comments.length === 0}>
                  <Button.Content visible>
                    <Icon name='comments' size='large'/>
                  </Button.Content>
                  <Button.Content hidden>Comments</Button.Content>
                </Button>
                }
                open={this.state.modal}
                onClose={this.handleCloseCommentsModal} size='small' closeIcon>
                  <Header content={name}/>
                  <Modal.Content>
                    <FeedContainer techId={id} comments={comments}/>
                  </Modal.Content>
                </Modal>

            </div>
            {
              this.state.visible &&
              <Message
              onDismiss={this.handleDismiss}
              content={this.state.message}
              color='teal'
              size='tiny'
              icon='checkmark box'
              compact
              floating/>
            }
              <TitleCard name={name} category={category} />
              <Counter likes={likes}/>
            </>
            :
            <Loader>Loading</Loader>
        }
      </article>
    );
  }
}

TechCard.propTypes = {
  techs: PropTypes.shape({
    name: PropTypes.string,
    likes: PropTypes.number,
    info: PropTypes.string,
    category:PropTypes.string,
    comments: PropTypes.array,
  }).isRequired,
};

const mapStateToProps = state => ({
  list: state.userTechList[0]
});

export default connect(mapStateToProps, {insertComment, updateLikes, addNewInList, removeFromList})(TechCard);

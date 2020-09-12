import { connect } from 'react-redux';
import NewsFeed from '../pages/NewsFeed';
import { getListPost, createPost, addRemovelikePost, saveResponsePost } from '../redux/actions/NewsFeedAction';

const mapStateToProps = state => {
  const { listPost, responsePost, loader, error } = state.newsFeedReducer;
  return {
    listPost,
    responsePost,
    loader,
    error
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getListPost: data => dispatch(getListPost(data)),
    createPost: dataForm => dispatch(createPost(dataForm)),
    addRemoveLikePost: data => dispatch(addRemovelikePost(data)),
    saveResponsePost: data => dispatch(saveResponsePost(data))
  }
};

const NewsFeedContainer = connect(mapStateToProps, mapDispatchToProps)(NewsFeed);

export default NewsFeedContainer;
import { connect } from 'react-redux';
import NewsFeed from '../pages/NewsFeed';
import { getListPost, createPost, addRemovelikePost, saveResponsePost, addRemovelikeCom, deletePost, deleteResponsePost, updateResponsePost } from '../redux/actions/NewsFeedAction';
import { getListFriends } from '../redux/actions/ProfileAction';

const mapStateToProps = state => {
  const { listPost, listFriends, responsePost, loader, error, cleanForm } = state.newsFeedReducer;
  return {
    listPost,
    listFriends,
    responsePost,
    loader,
    error,
    cleanForm
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getListPost: data => dispatch(getListPost(data)),
    createPost: dataForm => dispatch(createPost(dataForm)),
    addRemoveLikePost: data => dispatch(addRemovelikePost(data)),
    saveResponsePost: data => dispatch(saveResponsePost(data)),
    addRemoveLikeCom: data => dispatch(addRemovelikeCom(data)),
    getListFriends: userId => dispatch(getListFriends(userId)),
    deletePost: dataId => dispatch(deletePost(dataId)),
    deleteResponsePost: dataId => dispatch(deleteResponsePost(dataId)),
    updateResponsePost: data => dispatch(updateResponsePost(data))
  }
};

const NewsFeedContainer = connect(mapStateToProps, mapDispatchToProps)(NewsFeed);

export default NewsFeedContainer;
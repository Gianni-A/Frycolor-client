import { connect } from 'react-redux';
import NewsFeed from '../pages/NewsFeed';
import { getListPost, createPost, addRemovelikePost, saveResponsePost, addRemovelikeCom } from '../redux/actions/NewsFeedAction';

const mapStateToProps = state => {
  const { listPost, responsePost, loader, error, cleanForm } = state.newsFeedReducer;
  return {
    listPost,
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
    addRemoveLikeCom: data => dispatch(addRemovelikeCom(data))
  }
};

const NewsFeedContainer = connect(mapStateToProps, mapDispatchToProps)(NewsFeed);

export default NewsFeedContainer;
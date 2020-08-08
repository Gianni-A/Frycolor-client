import { connect } from 'react-redux';
import NewsFeed from '../pages/NewsFeed';
import { getListPost, createPost } from '../redux/actions/NewsFeedAction';

const mapStateToProps = state => {
  const { loader, error } = state.newsFeedReducer;
  return {
    loader,
    error
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getListPost: data => dispatch(getListPost(data)),
    createPost: dataForm => dispatch(createPost(dataForm))
  }
};

const NewsFeedContainer = connect(mapStateToProps, mapDispatchToProps)(NewsFeed);

export default NewsFeedContainer;
import { connect } from 'react-redux';
import NewsFeed from '../pages/NewsFeed';
import { getListPost } from '../redux/actions/NewsFeedAction';

const mapStateToProps = state => {
  const { loader, error } = state.newsFeedReducer;
  return {
    loader,
    error
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getListPost: data => dispatch(getListPost(data))
  }
};

const NewsFeedContainer = connect(mapStateToProps, mapDispatchToProps)(NewsFeed);

export default NewsFeedContainer;
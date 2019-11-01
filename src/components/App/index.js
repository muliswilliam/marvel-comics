import { connect } from 'react-redux';
import actions from '../../store/comic/actions';
import App from './App';
import { hasMoreComics, selectComic } from '../../store/comic/selectors';

const mapStateToProps = state => ({
  comic: state.comic,
  hasMoreComics: hasMoreComics(state),
  selectComic: selectComic(state)
});

const mapDispatcher = dispatch => ({
  getComics: ({ page, limit }) => dispatch(actions.getComics({ page, limit }))
});

export default connect(
  mapStateToProps,
  mapDispatcher
)(App);

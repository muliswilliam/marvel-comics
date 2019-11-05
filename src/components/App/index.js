import { connect } from 'react-redux';
import actions from '../../store/comic/actions';
import App from './App';
import {
  hasMoreComics,
  selectComic,
  comicsSelector
} from '../../store/comic/selectors';

const mapStateToProps = state => ({
  comic: state.comic,
  hasMoreComics: hasMoreComics(state),
  selectComic: selectComic(state),
  comicsSelector: comicsSelector(state)
});

const mapDispatcher = dispatch => ({
  getComic: comicId => dispatch(actions.getComic(comicId)),
  getComics: ({ page, limit }) => dispatch(actions.getComics({ page, limit }))
});

export default connect(
  mapStateToProps,
  mapDispatcher
)(App);

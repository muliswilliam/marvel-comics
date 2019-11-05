import React, { Component } from 'react';

import './Comics.scss';
import ComicsList from '../ComicsList/ComicsList';

class Comics extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { comics, isFetching } = this.props.comic;
    if (comics.length === 0 && !isFetching) {
      // fetch from api
      this.getComics();
    }
  }

  getComics = () => {
    const { limit, page } = this.props.comic;

    this.props.getComics(page, limit);
  };

  render() {
    const { hasMoreComics } = this.props;
    const { comics, isFetching } = this.props.comic;
    return (
      <ComicsList
        comics={comics}
        hasMoreComics={hasMoreComics}
        isFetching={isFetching}
        getComics={this.getComics}
      />
    );
  }
}

export default Comics;

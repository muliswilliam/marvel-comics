import React, { Component } from 'react';
import { Loader } from 'semantic-ui-react';

import Comic from '../Comic/Comic';

class ComicWrapper extends Component {
  constructor(props) {
    super(props);
    this.comicId = this.props.match.params.comicId;
  }
  componentDidMount() {
    const comic = this.selectComic();
    if (!comic) {
      this.props.getComic(this.comicId);
    }
  }

  selectComic = () => {
    const { comics } = this.props;
    return comics.find(c => c.id == this.comicId);
  };

  renderComic = () => {
    const comic = this.selectComic(this.comicId);
    if (this.props.isFetching == false && comic) {
      return <Comic comic={comic} />;
    } else {
      return <Loader active inline="centered" content="Loading" />;
    }
  };

  render() {
    return this.renderComic();
  }
}

export default ComicWrapper;

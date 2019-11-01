import React, {Component} from 'react';

import './Comics.scss';
import ComicsList from '../ComicsList/ComicsList';

class Comics extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.getComics();
	}

	getComics = () => {
		const { comic } = this.props;
		const { limit, page, isFetching } = comic;

		if(!isFetching) {
			this.props.getComics(page, limit)
		}
	};

	render(props) {
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

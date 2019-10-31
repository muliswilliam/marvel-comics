import React, {Component} from 'react';
import {Grid} from 'semantic-ui-react';
import MCard from '../Card/Card';

import './Comics.scss';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from 'semantic-ui-react/dist/commonjs/elements/Loader';

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

	renderComics = () => {
		const comics = this.props.comic.comics.filter(comic => comic.images.length > 0);
		return comics.map( (comic, index) =>
			<Grid.Column key={index}>
				<MCard {...comic}/>
			</Grid.Column>
		)
	};

	render(props) {
		const { hasMoreComics } = this.props;
		const { comics } = this.props.comic;
		return (
			<div className="grid-container">
				<InfiniteScroll
					next={this.getComics}
					hasMore={hasMoreComics}
					dataLength={comics.length}
					loader={<Loader />}
					style={{
						height: '100%',
						overflow: 'visible'
					}}
				>
					<Grid>
						<Grid.Row columns={5}>
							{ this.renderComics() }
						</Grid.Row>
					</Grid>
				</InfiniteScroll>
			</div>
		);
	}
}

export default Comics;

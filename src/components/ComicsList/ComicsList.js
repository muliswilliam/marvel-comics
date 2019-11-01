import React, {Component} from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import {Loader} from 'semantic-ui-react';
import {Grid} from 'semantic-ui-react';
import MCard from '../Card/Card';
import './ComicsList.scss';

class ComicsList extends Component {
	renderComics = (comics) => {
		return comics.map( (comic, index) =>
			<Grid.Column key={index}>
				<MCard {...comic}/>
			</Grid.Column>
		)
	};

	showLoader = (isFetching, comicsCount) => {
		if (isFetching && comicsCount === 0) {
			return <Loader
				active
				inline='centered'
				content='Loading'
			/>;
		}
	};

	render() {
		const { comics, hasMoreComics, isFetching, getComics } = this.props;
		return (
			<div>
				<div className="grid-container">
					{ this.showLoader(isFetching, comics.length)}
					<InfiniteScroll
						next={getComics}
						hasMore={hasMoreComics}
						dataLength={comics.length}
						loader={ <Loader inline="centered" active content='Loading'/> }
						style={{
							height: '100%',
							overflow: 'visible'
						}}
					>
						<Grid>
							<Grid.Row columns={5}>
								{ this.renderComics(comics) }
							</Grid.Row>
						</Grid>
					</InfiniteScroll>
				</div>
			</div>
		);
	}
}

ComicsList.propTypes = {
	comics: PropTypes.array.isRequired,
	hasMoreComics: PropTypes.bool.isRequired,
	getComics: PropTypes.func.isRequired,
	isFetching: PropTypes.bool,
};

export default ComicsList;

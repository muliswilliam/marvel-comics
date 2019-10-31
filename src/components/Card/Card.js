import React, {Component} from 'react';
import {Image, Card } from 'semantic-ui-react';

import './Card.scss';

class MCard extends Component {

	renderCreators = (creators) => {

		return (
			creators
			.slice(0, 2)
			.map((creator) => (
					<span className="m-card__creators" key={creator.name}>{creator.name}</span>
		))
		)
	};

	createURL = (thumbnail) => {
		const { path, extension} = thumbnail;
		return `${path}.${extension}`;
	};

	render({ title, thumbnail, creators, issueNumber, resourceURI } = this.props) {
		return (
			<div className="m-card">
				<Card
					href={resourceURI}
				>
					<Image className="m-card__image" src={this.createURL(thumbnail)} />
					<Card.Content>
						<Card.Header className="m-card__title">
							{ title }
						</Card.Header>
						<Card.Meta>
							{ creators.items ? this.renderCreators(creators.items): '' }
						</Card.Meta>
					</Card.Content>
				</Card>
			</div>
		);
	}
}

export default MCard;

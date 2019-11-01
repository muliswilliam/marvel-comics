import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Image, Card } from 'semantic-ui-react';

import generateUrl from '../../utils/generateUrl';
import './Card.scss';

class MCard extends Component {
  renderCreators = creators => {
    return creators.slice(0, 2).map(creator => (
      <span className="m-card__creators" key={creator.name}>
        {creator.name}
      </span>
    ));
  };

  render({ id, title, thumbnail, creators, issueNumber } = this.props) {
    return (
      <div className="m-card">
        <Link to={`/comics/${id}`}>
          <Card>
            <Image className="m-card__image" src={generateUrl(thumbnail)} />
            <Card.Content>
              <Card.Header className="m-card__title">{title}</Card.Header>
              <Card.Meta>
                {creators.items ? this.renderCreators(creators.items) : ''}
              </Card.Meta>
            </Card.Content>
          </Card>
        </Link>
      </div>
    );
  }
}

export default MCard;

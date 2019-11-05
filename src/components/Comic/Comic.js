import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Image, Icon } from 'semantic-ui-react';

import './Comic.scss';
import generateUrl from 'utils/generateUrl';
import selectDate from 'utils/selectDate';

class Comic extends Component {
  getCreatorName = (creators, role) => {
    const creator = creators.find(creator => creator.role === role);

    return creator ? creator.name : '-';
  };

  render() {
    const {
      title,
      images,
      dates,
      description,
      creators,
      thumbnail
    } = this.props.comic;

    return (
      <div className="comic-wrapper">
        <div className="grid-container comic">
          <Grid columns={1}>
            <Grid columns={2}>
              <Grid.Column width={6}>
                <div className="comic__image">
                  <Image
                    src={
                      images.length > 0
                        ? generateUrl(images[0])
                        : generateUrl(thumbnail)
                    }
                    className="comic__image"
                  />
                </div>
              </Grid.Column>
              <Grid.Column width={10} className="comic-meta">
                <h1 className="comic-meta__name">{title}</h1>
                <Grid.Row columns={1}>
                  <Grid.Column>
                    <h2 className="comic-meta__publisher">Published:</h2>
                    <p className="comic-meta__date">
                      {selectDate(dates, 'onsaleDate')}
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid columns={2} className="comic-meta__writers">
                  <Grid.Column className="left">
                    <h2>Writer</h2>
                    <p>{this.getCreatorName(creators.items, 'writer')}</p>
                  </Grid.Column>
                  <Grid.Column className="right">
                    <h2>Cover Artist</h2>
                    <p>
                      {this.getCreatorName(creators.items, 'penciller (cover)')}
                    </p>
                  </Grid.Column>
                </Grid>
                <Grid columns={1}>
                  <Grid.Column width={10}>
                    <p>
                      {description ? description : 'Description not available.'}
                    </p>
                    <a href="#">
                      See Variant covers
                      <Icon name="arrow right" />
                    </a>
                  </Grid.Column>
                </Grid>
              </Grid.Column>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Comic;

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../components/molecules/Card/Card';
import GridTemplate from '../components/Templates/GridTemplate';

const mapStateToProps = ({ twitters }) => ({ twitters });

const Twitters = ({ twitters }) => (
  <GridTemplate pageType='twitters'>
    {twitters.map(({ id, title, content, twitterName, created }) => (
      <Card
        id={id}
        cardType='twitters'
        title={title}
        content={content}
        twitterName={twitterName}
        created={created}
        key={id}
      />
    ))}
  </GridTemplate>
);

Twitters.propTypes = {
  twitters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    twitterName: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
  })),
};

Twitters.defaultProps = {
  twitters: [],
};

export default connect(mapStateToProps)(Twitters);

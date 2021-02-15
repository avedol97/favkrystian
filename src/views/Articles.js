import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from '../components/molecules/Card/Card';
import GridTemplate from '../components/Templates/GridTemplate';

const Articles = ({ articles }) => (
  <GridTemplate pageType='articles'>
    {articles.map(({ title, content, articleUrl, created, id }) => (
      <Card
        id={id}
        cardType='articles'
        title={title}
        content={content}
        articleUrl={articleUrl}
        created={created}
        key={id}
      />
    ))}
  </GridTemplate>
);

Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
      article: PropTypes.string.isRequired,
    }),
  ),
};

Articles.defaultProps = {
  articles: [],
};

const mapStateToProps = state => {
  const { articles } = state;
  return { articles };
};

// alternative form
// const mapStateToProps = ({ articles }) => ({ articles });


export default connect(mapStateToProps)(Articles);



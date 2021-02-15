import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from '../components/molecules/Card/Card';
import GridTemplate from '../components/Templates/GridTemplate';

const Articles = ({ articles }) => (
  <GridTemplate>
    {articles.map(({ title, content, articleUrl, created, id }) => (
      <Card
        id={id}
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
      articleUrl: PropTypes.string.isRequired,
    }),
  ),
};

Articles.defaultProps = {
  articles: [],
};
// alternative form
// const mapStateToProps = state => {
//   const { articles } = state;
//   return { articles };
// };


const mapStateToProps = ({ articles }) => ({ articles });


export default connect(mapStateToProps)(Articles);



import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from '../components/molecules/Card/Card';
import GridTemplate from '../components/Templates/GridTemplate';
import { fetchItems } from '../actions';


class Articles extends Component {

  componentDidMount() {
    this.props.fetchArticles();
  }

  render() {
    const { articles } = this.props;

    return (
      <GridTemplate>
        {articles.map(({ title, content, articleUrl, _id: id }) => (
          <Card
            id={id}
            title={title}
            content={content}
            articleUrl={articleUrl}
            key={id}
          />
        ))}
      </GridTemplate>
    );
  }
}


Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
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

const mapDispatchToProps = dispatch => ({
  fetchArticles: () => dispatch(fetchItems('articles')),
});


export default connect(mapStateToProps, mapDispatchToProps)(Articles);



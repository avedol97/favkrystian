import React from 'react';
import { connect } from 'react-redux';
import DetailsTemplate from '../components/Templates/DetailsTemplate';
import withContext from '../hoc/withContext';

const DetailPage = ({ activeItem }) => {
  const [item] = activeItem;
  return (
    <DetailsTemplate
      title={item.title}
      content={item.content}
      articleUrl={item.articleUrl}
      twitterName={item.twitterName}
    />
  );

};


const mapStateToProps = (state, ownProps) => {
  return {
    activeItem: state[ownProps.pageContext].filter(item => item._id === ownProps.match.params.id),
  };
};

export default withContext(connect(mapStateToProps)(DetailPage));

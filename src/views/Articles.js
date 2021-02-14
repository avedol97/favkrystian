import React from 'react';
import {connect} from 'react-redux'
import Card from '../components/molecules/Card/Card';
import GridTemplate from '../components/Templates/GridTemplate';

const mapStateToProps = ({articles}) => ({articles});

const Articles = ({articles}) =>(
  <GridTemplate pageType="articles">
      {articles.map(({ title,content,articleUrl,created,id }) =>(
        <Card
          id={id}
          cardType='articles'
          title={title}
          content={content}
          articleUrl={articleUrl}
          created={created}
          key={id}
        />
      )) }
  </GridTemplate>
);

export default connect(mapStateToProps)(Articles);

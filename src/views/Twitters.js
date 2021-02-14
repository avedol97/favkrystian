import React from 'react';
import {connect} from 'react-redux'
import Card from '../components/molecules/Card/Card';
import GridTemplate from '../components/Templates/GridTemplate';

const mapStateToProps = ({ twitters }) => ({ twitters });

const Twitters = ({twitters}) => (
  <GridTemplate pageType='twitters'>
      {twitters.map(({title,content,twitterName,created,id}) => (
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

export default connect(mapStateToProps)(Twitters);

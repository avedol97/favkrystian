import React from 'react';
import {connect} from 'react-redux';
import Card from '../components/molecules/Card/Card';
import GridTemplate from '../components/Templates/GridTemplate';

const mapStateToProps = ({notes}) => ({notes});


const Notes = ({notes}) =>(
  <GridTemplate pageType="notes">
    {notes.map(({title,content,created,id}) =>(
      <Card
        id={id}
        cardType="notes"
        title={title}
        content={content}
        created={created}
        key={id}
      />
    )) }
  </GridTemplate>
);

export default connect(mapStateToProps)(Notes);

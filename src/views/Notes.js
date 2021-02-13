import React from 'react';
import Card from '../components/molecules/Card/Card';
import GridTemplate from '../components/Templates/GridTemplate';


const notes = [
  {
    id:1,
    title: "Krystian1",
    content: " Tak tak tak",
    created:'1 day',
  },
  {
    id:2,
    title: "Krystian2",
    content: " Tak tak tak",
    created:'1 day',
  },
  {
    id:3,
    title: "Krystian3",
    content: " Tak tak tak",
    created:'1 day',
  },
  {
    id:4,
    title: "Krystian4",
    content: " Tak tak tak",
    created:'1 day',
  },
]

const Notes = () =>(
  <GridTemplate pageType="notes">
    {notes.map(({title,content,created,id}) =>(
      <Card
        cardType="notes"
        title={title}
        content={content}
        created={created}
        key={id}
      />
    )) }
  </GridTemplate>
);

export default Notes;

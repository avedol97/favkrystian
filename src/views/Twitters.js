import React from 'react';
import Card from '../components/molecules/Card/Card';
import GridTemplate from '../components/Templates/GridTemplate';

const twitters = [
    {
        id: 1,
        title: 'Krystian1',
        content: ' Tak tak tak',
        twitterName: 'https://panwybierak.pl/blog/wp-content/uploads/2020/05/avatarmaker5.png',
        created: '1 day',
    },
    {
        id: 2,
        title: 'Krystian2',
        content: ' Tak tak tak',
        twitterName: 'https://panwybierak.pl/blog/wp-content/uploads/2020/05/avatarmaker5.png',
        created: '1 day',
    },
    {
        id: 3,
        title: 'Krystian3',
        content: ' Tak tak tak',
        twitterName: 'https://panwybierak.pl/blog/wp-content/uploads/2020/05/avatarmaker5.png',
        created: '1 day',
    },
    {
        id:4,
        title: 'Krystian4',
        content: ' Tak tak tak',
        twitterName: 'https://panwybierak.pl/blog/wp-content/uploads/2020/05/avatarmaker5.png',
        created: '1 day',
    },
];

const Twitters = () => (
  <GridTemplate pageType='twitters'>
      {twitters.map(({title,content,twitterName,created,id}) => (
        <Card
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

export default Twitters;

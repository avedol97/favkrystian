import React from 'react';
import Card from '../components/molecules/Card/Card';
import GridTemplate from '../components/Templates/GridTemplate';

const articles = [
    {
        id:1,
        title: "Krystian1",
        content: " Tak tak tak",
        articleUrl: "https://www.siepomaga.pl/",
        created:'1 day',
    },
    {
        id:2,
        title: "Krystian2",
        content: " Tak tak tak",
        articleUrl: "https://www.siepomaga.pl/",
        created:'1 day',
    },
    {
        id:3,
        title: "Krystian3",
        content: " Tak tak tak",
        articleUrl: "https://www.siepomaga.pl/",
        created:'1 day',
    },
    {
        id:4,
        title: "Krystian4",
        content: " Tak tak tak",
        articleUrl: "https://www.siepomaga.pl/",
        created:'1 day',
    },
]

const Articles = () =>(
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

export default Articles;

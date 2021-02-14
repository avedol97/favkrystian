const initialState = {
  notes: [
    {
      id: 1,
      title: 'Pierwsza',
      content: ' Jest tak :)',
      created: '14 day',
    },
  ],
  twitters: [
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
      title: 'Jupi ja jej!',
      content: ' Tak tak tak',
      twitterName: 'https://panwybierak.pl/blog/wp-content/uploads/2020/05/avatarmaker5.png',
      created: '1 day',
    },
  ],
  articles: [
    {
      id: 1,
      title: 'Wiktoriaaa!',
      content: 'Blizna nad nami',
      articleUrl: 'https://www.siepomaga.pl/',
      created: '2 day',
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  console.log(action);
  return state;
};

export default rootReducer;

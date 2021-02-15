const initialState = {
  notes: [
    {
      id: '1fd',
      title: 'Pierwsza',
      content: ' Jest tak :)',
      created: '14 day',
    },
  ],
  twitters: [
    {
      id: 1,
      title: 'Ananasek Fluffy;)',
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
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        [action.payload.itemType]: [
          ...state
            [action.payload.itemType],
          action.payload.item],
      };
    case('REMOVE_ITEM'):
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType].filter(item => item.id !== action.payload.id),
        ],
      };
    default:
      return state;
  }
};

export default rootReducer;

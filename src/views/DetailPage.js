import React, { Component } from 'react';
import DetailsTemplate from '../components/Templates/DetailsTemplate';
import { routes } from '../routes';


class DetailPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageType: 'notes',
    };
  }

  componentDidMount() {
    switch (this.props.match.path) {
    case routes.twitter:
      this.setState({pageType: 'twitters'})
      break;
    case routes.note:
      this.setState({pageType: 'notes' })
      break;
    case routes.article:
      this.setState({pageType: 'articles'})
      break;
    default:
      console.log('Something went wrong!');
  }
}

  render() {
    const dummyArticle = {
      id: 1,
      title: 'wiecej Motywacji',
      content: 'Potrzeba wiecej motywacji Panie ;)',
      twitterName: 'krystian',
      articleUrl: 'https://www.siepomaga.pl/',
      created: '2 day',
    };

    return (
      <DetailsTemplate pageType={this.state.pageType}
                       title={dummyArticle.title}
                       created={dummyArticle.created}
                       content={dummyArticle.content}
                       articleUrl={dummyArticle.articleUrl}
                       twitterName={dummyArticle.twitterName}
      />
    );
  }
}


export default DetailPage;

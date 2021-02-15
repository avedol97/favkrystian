import React, { Component } from 'react';
import DetailsTemplate from '../components/Templates/DetailsTemplate';
import { routes } from '../routes';


class DetailPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageContext: 'notes',
    };
  }

  componentDidMount() {
    switch (this.props.match.path) {
    case routes.twitter:
      this.setState({pageContext: 'twitters'})
      break;
    case routes.note:
      this.setState({pageContext: 'notes' })
      break;
    case routes.article:
      this.setState({pageContext: 'articles'})
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
      <DetailsTemplate pageContext={this.state.pageContext}
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

import React, { Component } from 'react';
import DetailsTemplate from '../components/Templates/DetailsTemplate';
import { routes } from '../routes';

class DetailPage extends Component {
constructor(props) {
  super(props);

  this.state = {
    pageType:'notes',
  }
}

componentDidMount() {
  switch(this.props.match.path){
    case routes.twitter:
      this.setState({pageType: 'twitters'})
      break;
    case routes.note:
      this.setState({pageType: 'notes'})
      break;
    case routes.article:
      this.setState({pageType: 'articles'})
      break;
    default:
      this.setState({pageType: 'notes'})
  }
}

  render() {
    // const {match} = this.props;
    return (
      <DetailsTemplate pageType={this.state.pageType}>
        <p>{this.state.pageType}</p>
      </DetailsTemplate>
    );
  }
}

export default DetailPage;

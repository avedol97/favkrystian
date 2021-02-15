import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/mainTheme';
import GlobalStyle from '../../theme/GlobalStyle';

class MainTemplate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageType: 'notes',
    };
  }

  componentDidMount() {
    this.setCurrentPage();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.setCurrentPage(prevState);
  }

  setCurrentPage = (prevState='') => {
    const pageTypes = ['twitters', 'articles', 'notes'];
    const { location: { pathname } } = this.props;
    const [currentPage] = pageTypes.filter(page => pathname.includes(page));

    if (prevState.pageTypes !== currentPage) {
      this.setState({ pageTypes: currentPage });
      console.log(this.state.pageTypes);
    }
  };

  render() {
    const { children } = this.props;
    return (
      <div>
        <GlobalStyle />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </div>
    );
  }
}


MainTemplate.propType = {
  children: PropTypes.element.isRequired,
};
export default withRouter(MainTemplate);

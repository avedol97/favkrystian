import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/mainTheme';
import GlobalStyle from '../../theme/GlobalStyle';
import PageContext from '../../context';

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

    if (prevState.pageType !== currentPage) {
      this.setState({ pageType: currentPage });
    }
  };

  render() {
    const { children } = this.props;
    const { pageType } = this.state;

    return (
      <div>
        <PageContext.Provider value={pageType}>
          <GlobalStyle />
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </PageContext.Provider>
      </div>
    );
  }
}


MainTemplate.propType = {
  children: PropTypes.element.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(MainTemplate);

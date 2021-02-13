import React from 'react';
 import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/mainTheme';
import GlobalStyle from '../../theme/GlobalStyle';

const MainTemplates = ({children}) => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  </div>
);

MainTemplates.prototype = {
  children: PropTypes.element.isRequired,
}
export default MainTemplates ;

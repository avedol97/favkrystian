import React from 'react';
import {ThemeProvider} from 'styled-components';
import Button from '../../components/Button/Button';
import {theme} from '../../theme/mainTheme';


const Root = () => (
  <div>
    <ThemeProvider theme={theme}>
      <>
    <h1>Hello Krystian</h1>
    <Button>CLOSE / SAVE</Button>
    <Button secondary>Remove</Button>
      </>
    </ThemeProvider>
  </div>
);
export default Root;

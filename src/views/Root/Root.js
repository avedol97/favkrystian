import React from 'react';
import {ThemeProvider} from 'styled-components';
import Button from '../../components/atoms/Button/Button';
import {theme} from '../../theme/mainTheme';
import GlobalStyle from '../../theme/GlobalStyle';
import Input from '../../components/atoms/Input/Input';


const Root = () => (
  <div>
    <GlobalStyle/>
    <ThemeProvider theme={theme}>
      <>
    <h1>Hello Krystian</h1>
    <Button>CLOSE / SAVE</Button>
    <Button secondary>Remove</Button>
        <Input/>
        <Input search/>
      </>
    </ThemeProvider>
  </div>
);
export default Root;

import React from 'react';
import {ThemeProvider} from 'styled-components';
import Button from '../../components/atoms/Button/Button';
import {theme} from '../../theme/mainTheme';
import GlobalStyle from '../../theme/GlobalStyle';
import Input from '../../components/atoms/Input/Input';
import Card from '../../components/molecules/Card/Card.stories';
import ButtonIcon from '../../components/atoms/ButtonIcon/ButtonIcon';
import bulbIcon from '../../assets/icons/bulb.svg';


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
        <ButtonIcon  icon={bulbIcon} />
        <Card/>
      </>
    </ThemeProvider>
  </div>
);
export default Root;

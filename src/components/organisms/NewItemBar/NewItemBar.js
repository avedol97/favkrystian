import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import withContext from '../../../hoc/withContext';
import Heading from '../../atoms/Heading/Heading';

const StyledWrapper = styled.div`
  border-left: 10px solid ${({theme,activecolor}) => theme[activecolor]};
  z-index: 9999;
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 680px;
  background-color: white;
  box-shadow: -5px 0  15px rgba(0,0,0,0.1);
`;

const StyledTextArea = styled(Input)`
  margin: 30px 0 100px;
  border-radius: 10px;
  height: 30vh;
`;

const NewItemBar = ({pageContext}) => (
  <StyledWrapper>
    <Input placeholder="TITLE"/>
    <StyledTextArea as="textarea" placeholder="DESCRIPTION"/>
    <Button activecolor={pageContext}>ADD NOTE</Button>
  </StyledWrapper>
)

export default withContext(NewItemBar);

import React from 'react';
import styled from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Heading from '../../atoms/Heading/Heading';
import Button from '../../atoms/Button/Button';

const StyledWrapper = styled.div`
 padding: 30px 17px;
`;

const Card = () => (
  <StyledWrapper>
    <Heading>Hello Krystian!</Heading>
    <Paragraph>kjfsdsjfhsdkhnflksndlfnlsdnlfnsdlnf sd fknsdlklnfks nlfnsd l</Paragraph>
    <Button secondary>REMOVE</Button>
  </StyledWrapper>
);

export default Card;

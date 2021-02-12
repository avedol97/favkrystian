import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Heading from '../../atoms/Heading/Heading';
import Button from '../../atoms/Button/Button';
import LinkIcon from  '../../../assets/icons/link.svg';
const StyledWrapper = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  position: relative;
  padding: 30px 17px;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};


  :first-of-type {
    z-index: 9999;
  }

  ${({ flex }) =>
          flex && css`
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          `
  }
`;
const DateInfo = styled(Paragraph)`
  margin: 0 0 10px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
`;


const StyledAvatar = styled.img`
  width: 86px;
  height: 86px;
  border: 5px solid (${({ theme }) => theme.twitters});
  position: absolute;
  border-radius: 50px;
  top: 25px;
  right: 25px;
`;

const StyledLinkButton = styled.a`
  display: block;
  width: 47px;
  height: 47px;
  border-radius: 50px;
  background: white url(${LinkIcon}) no-repeat;
  background-size: 60% ;
  background-position: 50%;
  position: absolute;
  top:50%;
  right:25px;
  transform: translateY(-50%); 
`;
const Card = ({ cardType }) => (
  <StyledWrapper>
    <InnerWrapper activeColor={cardType}>
      <StyledHeading>Hello Krystian!</StyledHeading>
      <DateInfo>3 days</DateInfo>
      {cardType === 'twitters' && <StyledAvatar src='https://panwybierak.pl/blog/wp-content/uploads/2020/05/avatarmaker5.png' />}
      {cardType === 'articles' && <StyledLinkButton href="https://www.siepomaga.pl/"/>}
    </InnerWrapper>
    <InnerWrapper flex>
      <Paragraph>kjfsdsjfhsdkhnflksndlfnlsdnlfnsdlnf sd fknsdlklnfks nlfnsd l</Paragraph>
      <Button secondary>REMOVE</Button>
    </InnerWrapper>
  </StyledWrapper>
);


Card.prototype = {
  cardType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

Card.defaultProps = {
  cardType: 'notes',
};

export default Card;

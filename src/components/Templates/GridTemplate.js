import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserPageTemplate from './UserPageTemplate';
import Input from '../atoms/Input/Input';
import Heading from '../atoms/Heading/Heading';
import Paragraph from '../atoms/Paragraph/Paragraph';
import withContext from '../../hoc/withContext';

const StyledWrapper = styled.div`
  padding:25px 150px 25px 70px ;
 
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 85px;
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledHeading =styled(Heading)`
  margin: 0;
  ::first-letter{
    text-transform: uppercase;
  }
`;

const StyledParagraph =styled(Paragraph)`
  margin: 0;
  font-weight: ${({theme})=> theme.bold};
`;

const GridTemplate = ({ children,pageContext }) => (
  <UserPageTemplate>
    <StyledWrapper>
      <StyledPageHeader>
        <Input search placeholder="Search"/>
        <StyledHeading big as="h1">{pageContext}</StyledHeading>
        <StyledParagraph>6 {pageContext}</StyledParagraph>
      </StyledPageHeader>
      <StyledGrid>
        {children}
      </StyledGrid>
    </StyledWrapper>
  </UserPageTemplate>
);

UserPageTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageContext: PropTypes.oneOf(['notes','twitters','articles']),
};

UserPageTemplate.defaultProps = {
  pageContext:'notes',
};

export default withContext(GridTemplate);

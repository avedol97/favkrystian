import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UserPageTemplate from './UserPageTemplate';
import Paragraph from '../atoms/Paragraph/Paragraph';
import Heading from '../atoms/Heading/Heading';
import Button from '../atoms/Button/Button';

const StyledWrapper = styled.div`
  padding: 25px 150px 25px 70px;
  max-width: 50vw;
  position: relative;

  @media (max-width: 1200px) {
    max-width: 80vw;
  }
`;

const StyledLink = styled.a`
  display: block;
  margin: 20px 0 50px;
  text-transform: uppercase;
  color: black;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledImage = styled.img`
  position: absolute;
  right: -80px;
  width: 120px;
  height: 120px;
  top: 50px;
  border-radius: 50%;
`;

const DetailsTemplate = ({ pageType, title, content, articleUrl, twitterName }) => (
  <UserPageTemplate pageType={pageType}>
    <StyledWrapper>
      <StyledPageHeader>
        <StyledHeading>
          {title}
        </StyledHeading>
      </StyledPageHeader>
      <Paragraph>{content}</Paragraph>
      {pageType === 'articles' && <StyledLink href={articleUrl} target='_blank'>Open article</StyledLink>}
      {pageType === 'twitters' &&
      <StyledImage alt={twitterName} src='https://panwybierak.pl/blog/wp-content/uploads/2020/05/avatarmaker5.png' />}


      <Button as={Link} to={`${pageType}`} activecolor={pageType}>
        save / close
      </Button>
    </StyledWrapper>
  </UserPageTemplate>
);

DetailsTemplate.propTypes = {
  pageType: PropTypes.oneOf(['notes', 'articles', 'twitters']).isRequired,
  title: PropTypes.string,
  content: PropTypes.string,
  articleUrl: PropTypes.string,
  twitterName: PropTypes.string,
};

DetailsTemplate.defaultProps = {
  title: '',
  content: '',
  articleUrl: '',
  twitterName: '',
};

export default DetailsTemplate;

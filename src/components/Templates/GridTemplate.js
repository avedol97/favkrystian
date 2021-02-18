import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserPageTemplate from './UserPageTemplate';
import Input from '../atoms/Input/Input';
import Heading from '../atoms/Heading/Heading';
import Paragraph from '../atoms/Paragraph/Paragraph';
import ButtonIcon from '../atoms/ButtonIcon/ButtonIcon';
import plusIcon from '../../assets/icons/plus.svg';
import withContext from '../../hoc/withContext';
import NewItemBar from '../organisms/NewItemBar/NewItemBar';


class GridTemplate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNewItemBarVisible: false,
    };
  }

  handleNewItemBar = () => this.setState(prevState => ({ isNewItemBarVisible: !prevState.isNewItemBarVisible }));

  render() {
    const { children, pageContext } = this.props;
    const { isNewItemBarVisible } = this.state;
    return (
      <UserPageTemplate>
        <StyledWrapper>
          <StyledPageHeader>
            <Input search placeholder='Search' />
            <StyledHeading big as='h1'>{pageContext}</StyledHeading>
            <StyledParagraph>6 {pageContext}</StyledParagraph>
          </StyledPageHeader>
          <StyledGrid>{children}</StyledGrid>
          <StyledButtonIcon onClick={this.handleNewItemBar} icon={plusIcon} activeColor={pageContext} />
          <NewItemBar handleClose={this.handleNewItemBar}  isVisible={isNewItemBarVisible}/>
        </StyledWrapper>
      </UserPageTemplate>
    )
  }
}



const StyledButtonIcon = styled(ButtonIcon)`
  position: fixed;
  bottom: 40px;
  right:40px;
  background-color: ${({activeColor,theme}) => theme[activeColor]};
  background-size: 35%;
  border-radius: 50px;
  z-index: 10000;
`;

const StyledWrapper = styled.div`
  position: relative;
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


GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageContext: PropTypes.oneOf(['notes','twitters','articles']),
};

GridTemplate.defaultProps = {
  pageContext:'notes',
};

export default withContext(GridTemplate);

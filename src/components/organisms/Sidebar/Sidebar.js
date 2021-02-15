import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import penIcon from '../../../assets/icons/pen.svg';
import logoutIcon from '../../../assets/icons/logout.svg';
import bulbIcon from '../../../assets/icons/bulb.svg';
import twitterIcon from '../../../assets/icons/twitter.svg';
import logoIcon from '../../../assets/icons/logo.svg';
import withContext from '../../../hoc/withContext';

const SidebarWrapper = styled.nav`
  left: 0;
  top: 0;
  padding: 20px 0;
  position: fixed;
  display: flex;
  width: 150px;
  height: 100vh;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.notes)};
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const SidebarLogo = styled(NavLink)`
  display: block;
  width: 67px;
  height: 67px;
  background-image: url(${logoIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 80%;
  border: none;
  margin-bottom: 10vh;
`;

const StyledLinkList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const StyledLogoutButton = styled(ButtonIcon)`
  margin-top: auto;
`;

const Sidebar = ({ pageContext }) => (
  <SidebarWrapper activeColor={pageContext}>
    <SidebarLogo to='/' />
    <StyledLinkList>
      <li>
        <ButtonIcon as={NavLink} to='/notes' icon={penIcon} activeclass="active" />
      </li>
      <li>
        <ButtonIcon as={NavLink} to='/twitters' icon={twitterIcon} activeclass="active" />
      </li>
      <li>
        <ButtonIcon as={NavLink} to='/articles' icon={bulbIcon} activeclass="active" />
      </li>
    </StyledLinkList>
      <StyledLogoutButton as={NavLink} to='/login' icon={logoutIcon}  />
  </SidebarWrapper>
);

Sidebar.prototype = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

Sidebar.defaultProps = {
  pageContext: 'notes',
};

export default withContext(Sidebar);

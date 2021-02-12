import React from 'react';
import { Link } from 'react-router-dom';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import penIcon from '../../../assets/icons/pen.svg';
import logoutIcon from '../../../assets/icons/logout.svg';
import bulbIcon from '../../../assets/icons/bulb.svg';
import twitterIcon from '../../../assets/icons/twitter.svg';


const Sidebar = () => (
  <div>
  <p>logo</p>
    <div>
      <ButtonIcon as={Link} to="/notes" icon={penIcon}/>
      <ButtonIcon as={Link} to="/twitters" icon={twitterIcon}/>
      <ButtonIcon as={Link} to="/articles" icon={bulbIcon}/>
      <div>
      <ButtonIcon as={Link} to="/"  icon={logoutIcon}/>
      </div>
    </div>
  </div>
)

export default Sidebar;

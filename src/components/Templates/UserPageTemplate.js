import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../organisms/Sidebar/Sidebar';

const UserPageTemplate = ({ children, pageType }) => (
  <>
    <Sidebar pageContext={pageType} />
    {children}
  </>
);

UserPageTemplate.propTypes = {
  // children: PropTypes.instanceOf(Array).isRequired,
  pageType: PropTypes.oneOf(['notes','twitters','articles']),
};

UserPageTemplate.defaultProps = {
  pageType:'notes',
};

export default UserPageTemplate;

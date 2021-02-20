import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Form, Formik } from 'formik';
import { connect } from 'react-redux';
import { addItem as addItemAction } from '../../../actions';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import withContext from '../../../hoc/withContext';
import Heading from '../../atoms/Heading/Heading';


const StyledWrapper = styled.div`
  border-left: 10px solid ${({ theme, activecolor }) => theme[activecolor]};
  z-index: 9999;
  display: flex;
  flex-direction: column;
  position: fixed;
  padding: 100px 90px;
  right: 0;
  top: 0;
  height: 100vh;
  width: 680px;
  background-color: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  transform: translate(${({ isVisible }) => isVisible ? '0' : '100%'});
  transition: transform 0.3s ease-in-out;

`;

const StyledTextArea = styled(Input)`
  margin: 30px 0 100px;
  border-radius: 20px;
  height: 30vh;
`;

const StyledInput = styled(Input)`
  margin-top: 30px;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const NewItemBar = ({ pageContext, isVisible, addItem,handleClose }) => (
  <StyledWrapper isVisible={isVisible} activecolor={pageContext}>
    <Heading big>Create new {pageContext}</Heading>
    <Formik initialValues={{ title: '', content: '', articleUrl: '', twitterName: ''}}
            onSubmit={(values) => {
              console.log(values);
              console.log(pageContext)
              addItem(pageContext,values);
              handleClose();
            }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <StyledForm>
          <StyledInput
            type='text'
            name='title'
            placeholder='title'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
          />
          {pageContext === 'twitters' &&
          <StyledInput
            placeholder='twitter name'
            type='text'
            name='twitterName'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.twitterName}
          />
          }
          {pageContext === 'articles' && <StyledInput
            placeholder='LINK'
            type='text'
            name='articleUrl'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.articleUrl}
          />
          }
          <StyledTextArea
            as='textarea'
            placeholder='DESCRIPTION'
            name='content'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.content}
          />
          <Button type='submit' activecolor={pageContext}>Add Note</Button>
        </StyledForm>
      )}
    </Formik>
  </StyledWrapper>
);

NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

NewItemBar.defaultProps = {
  pageContext: 'notes',
};

const mapDispatchToProps = dispatch => ({
  addItem: (itemType, itemContent) => dispatch(addItemAction(itemType, itemContent)),
});

export default connect(null, mapDispatchToProps)(withContext(NewItemBar));

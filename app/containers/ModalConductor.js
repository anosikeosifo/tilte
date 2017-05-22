import React, { Component, PropTypes } from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';


const ModalConductor = (props) => {
  console.log('currentModal: ', props.currentModal);
  switch (props.currentModal) {
    case 'login':
      return <Login { ...props } />;
    case "signup":
      return <Signup { ...props }/>;
    default:
      return null;
  }
};


export default ModalConductor;

import React, { Component, PropTypes } from 'react';
import Login from '../../authentication/components/Login';
import Signup from '../../authentication/components/Signup';


const ModalConductor = (props) => {
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

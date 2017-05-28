require('../styles/login.scss');

import React, { Proptypes } from 'react';
import ModalWrapper from '../../core/components/ModalWrapper';
import { ICON_EMAIL, ICON_USER, ICON_PASSWORD } from '../constants';
import Icon from '../../core/components/Icon';


const Login = (props) => {
  const iconColor = '#444';
  const modalDimension = { width: 500, height: 400 };

  return(
    <ModalWrapper
      width={ modalDimension.width }
      height={ modalDimension.height }>

      <section className='component__signup'>
        <div className='login__container'>
          <div className='input__group'>
            <div className='input__container'>
              <input type='email' aria-label='Email Address' className='signup__email'/>
            </div>
            <div className='icon__wrap'>
              <Icon icon={ ICON_EMAIL } size={16} color={ iconColor } />
            </div>
          </div>

          <div className='input__group'>
            <div className='input__container'>
              <input type='text' aria-label='Firstname' className='signup__firstname'/>
            </div>
            <div className='icon__wrap'>
              <Icon icon={ ICON_USER } size={16} color={ iconColor } />
            </div>
          </div>
        </div>
      </section>
    </ModalWrapper>
  );
};

Login.propTypes = {

}

export default Login;

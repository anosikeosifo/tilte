require('../styles/modal_wrapper.scss');

import React, { Component, PropTypes } from 'react';
import Icon from './Icon';
import { ICON_CANCEL } from '../constants';


const defaultCloseAction = (event) => {
  console.log('defaultCloseAction triggered');
};

const ModalWrapper = (props) => {
  const iconColor = '#444';

  const handleBackgroundClick = (event) => {
    props.callBacks.close();
  };

  const handleCloseTrigger= () => {
    props.callBacks.close();
  };

  const modalStyles = {
    height: props.height,
    width: props.width
  }

  return(
    <section className='component__modalwrapper' onClick={ handleBackgroundClick }>
      <div className='modal__wrap'>
        <div className='modal__container'>
          <div className='modal__content' style={ modalStyles }>
            <div className='header'>
              <span className='title'>{ props.title }</span>
                <span className='close__trigger' onClick={ handleCloseTrigger }>
                <Icon icon={ ICON_CANCEL } color={ iconColor } size={ 42 } viewBox={200} scaleTo={ 2 } />
              </span>
            </div>

            <div className='body'>
              { props.children }
            </div>

            <div className='footer'>
              { props.footerContent }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ModalWrapper.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  title: PropTypes.string,
  callBacks: PropTypes.shape({
    close: PropTypes.func.isRequired
  }),
};

ModalWrapper.defaultProps = {
  callBacks: {
    close: defaultCloseAction
  }
}

export default ModalWrapper;

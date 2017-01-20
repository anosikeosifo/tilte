import React, { PropTypes } from 'react';


const Icon = (props) => {
  const styles = {
    svg: {
      display: 'inline-block',
      verticalAlign: 'middle',
    },

    path: {
      fill: props.color
    }
  }

  return(
    <svg  className='icon' style={ styles.svg } height={`${props.size}px`} width={`${props.size}px`} viewBox='0 0 1024 1024'>
      <path d={ props.icon } style={ styles.path }/>
    </svg>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
};

Icon.defaultProps = {
  size: 24
};

export default Icon;
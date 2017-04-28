import React, { PropTypes } from 'react';


const Icon = (props) => {
  const styles = {
    svg: {
      display: 'inline-block',
      verticalAlign: 'middle',
    },

    g: {
      fill: props.color,
      scale: props.scaleTo
    }
  }

  return(
    <svg  className='icon' style={ styles.svg } height={`${props.size}px`} width={`${props.size}px`} viewBox='0 0 1024 1024'>
      <g fill={ styles.g.fill } transform={ ( props.scaleTo ? `scale(${ styles.g.scale }, ${ styles.g.scale })` : '') }>
        <path d={ props.icon } />
      </g>
    </svg>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
  scaleTo: PropTypes.string,
};

Icon.defaultProps = {
  size: 24
};

export default Icon;

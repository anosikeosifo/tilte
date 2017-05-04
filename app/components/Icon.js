import React, { PropTypes } from 'react';

const buildSVGPaths = (iconsPaths) => {
  let key = 0;
  return iconsPaths.map((path) => {
    key++;
    return (<path key={key} d={path}></path>);
  });
};

const Icon = (props) => {
  let svgPathData;
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
    <svg className='icon' style={ styles.svg } height={`${props.size}px`} width={`${props.size}px`} viewBox={ `0 0 ${ props.viewBox } ${ props.viewBox }` }>
      <g fill={ styles.g.fill } transform={ ( props.scaleTo ? `scale(${ styles.g.scale }, ${ styles.g.scale })` : '') }>
        { buildSVGPaths(props.icon) }
      </g>
    </svg>
  );
};

Icon.propTypes = {
  icon: PropTypes.array,
  color: PropTypes.string,
  size: PropTypes.number,
  scaleTo: PropTypes.number,
};

Icon.defaultProps = {
  size: 24,
  viewBox: 1024,
  color: '#555',
};

export default Icon;

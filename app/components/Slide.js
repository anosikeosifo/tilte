import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

class Slide extends Component {
  render() {
    let backgroundStyle = {
      backgroundImage: `url(${ this.props.imagePath })`,
      backgroundPosition: 'center'
     };
    let classes = classNames({
      slide: true,
      'slide__active': this.props.active,
    });

    return(
      <div className={classes} style={ backgroundStyle }>
        <section className='banner__widget'>
          <p>{ this.props.widgetImage }</p>
          <p>{ this.props.widgetText }</p>
          <Link to={ this.props.widgetLink }>{ this.props.widgetTitle }</Link>
        </section>
      </div>
    );
  }
}

Slide.propTypes = {
  active: PropTypes.boolean,
  imagePath: PropTypes.string,
  imageAlt: PropTypes.string,
  widgetText: PropTypes.string,
  widgetImagePath: PropTypes.string,
  widgetLink: PropTypes.string,
}

export default Slide;

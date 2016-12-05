import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class BannerSlide extends Component {
  render() {
    let backgroundStyle = { backgroundImage: `url(${ this.props.imagePath })` };
    let classes = classNames({
      slide: true,
      'slide__active': this.props.active,
    });

    return(
      <div className={classes} style={ backgroundStyle }>
        <section className='banner__widget'>
          <p>{ this.props.widgetImage }</p>
          <p>{ this.props.widgetText }</p>
          <p>{ this.props.widgetLink }</p>
        </section>
      </div>
    );
  }
}

BannerSlide.propTypes = {
  active: PropTypes.boolean,
  imagePath: PropTypes.string,
  imageAlt: PropTypes.string,
  widgetText: PropTypes.string,
  widgetImagePath: PropTypes.string,
  widgetLink: PropTypes.string,
}

export default BannerSlide;

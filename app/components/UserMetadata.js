import React, { Component } from 'react';

class UserMetadata extends  Component {
  handleScrollLeft(event) {
    this.scrollLeftControl = event.target.closest('.scroll__control');
    const scrollDimension = this.boardContentWrap.style.transform.match(/translateX\(-?(\d+)%\)/);
    const containerCanScrollLeft = this.firstElement.getBoundingClientRect().left < this.boardContentScrollArea.getBoundingClientRect().left;

    if (containerCanScrollLeft) {
      this.scrollContainer(parseInt(scrollDimension[1]) - 25);
      this.scrollRightControl && this.scrollRightControl.classList.remove('hidden');
    }
  }

  handleScrollRight(event) {
    this.scrollRightControl =  event.target.closest('.scroll__control');
    const scrollDimension = this.boardContentWrap.style.transform.match(/translateX\(-?(\d+(\.\d+)?)%\)/);
    const containerCanScrollRight = (this.lastElement.getBoundingClientRect().right - this.boardContentScrollArea.getBoundingClientRect().right) > 15;

    if (containerCanScrollRight) {
      this.scrollContainer(parseInt(scrollDimension[1]) + 25);
      this.scrollLeftControl && this.scrollLeftControl.classList.remove('hidden');
    }
  }

  handleConainerTransition(event) {
    const containerCanScrollRight = (this.lastElement.getBoundingClientRect().right - this.boardContentScrollArea.getBoundingClientRect().right) > 15;
    const containerCanScrollLeft = this.firstElement.getBoundingClientRect().left < this.boardContentScrollArea.getBoundingClientRect().left;

    if(event.propertyName == 'transform' && event.target.classList.contains('content__wrap')) {
      if(this.scrollRightControl && !containerCanScrollRight) this.scrollRightControl.classList.add('hidden');
      if(this.scrollLeftControl && !containerCanScrollLeft) this.scrollLeftControl.classList.add('hidden');
    }
  }

  scrollContainer(scrollValue) {
    this.setState(update(this.state, {
      scrolledBy: {
        transform: { $set: `translateX(-${ scrollValue }%)` }
      }
    }));
  }

  render() {
    const metadataItems = Object.keys(this.props.metadata).map((key) => {
      return(<li>{`${ data[key] } ${ key }`}</li>)
    });

    return(
      <section className='component__user_metadata'>
        <div className='data__container__wrap'>
          <span className='scroll__control left' onClick={ this.handleScrollLeft }><Icon icon={ ICON_SCROLL_LEFT } color='#444' size=12 /></span>

          <div className='scrollable_area' ref={ (ref) => this.scrollArea = ref }>
            <div className='data__list' ref={ (ref) => dataListWrap = ref } onTransitionEnd={ this.handleConainerTransition } style={ this.state.scrolledBy }>
            { metadataItems }
            </div>
          </div>

          <span className='scroll__control right' onClick={ this.handleScrollRight }><Icon icon={ ICON_SCROLL_RIGHT } color='#444' size=12 /></span>
        </div>
      </section>
    );
  }
}

export default UserMetadata

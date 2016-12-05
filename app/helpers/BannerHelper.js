import DOMHelper from './DOMHelper';

class BannerHelper {
  constructor() {
    this.bannerContainer = document.createDocumentFragment();;
  }

  apply(config = { images: [] }) {
    this.config = config;
    this.validate();
    this.buildBannerArray();
    return this.bannerContainer.firstChild.outerHTML;
  }

  buildBannerArray() {
    for (const bannerImage of this.config.images) {
      this.bannerContainer.appendChild(this.buildBannerElement(bannerImage));
    }
  }

  buildBannerElement(image) {
    const bannerElement =  DOMHelper.buildDOMElement('div', { class: ['banner__item'] });
    bannerElement.style.backgroundImage = `url(${ image })`;
    return bannerElement;
  }

  validate() {
    const requiredConfig = ['images'];
    const missingConfig = [];

    for(const config of requiredConfig) {
      if(!Object.keys(this.config).includes(config))
        missingConfig.push(config);
    }

    if (missingConfig.length) {
      throw new Error(`The following configuration keys are required: ${ missingConfig.join('\n') }`);
    }
  }
}

export default new BannerHelper();

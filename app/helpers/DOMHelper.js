
export const buildDOMElement = (elementTag, options = null) => {
  const domElement = document.createElement(elementTag);
  if(!options) return domElement;

  if (options.classList && options.classList.length) {
    options.classList.forEach((classItem) => domElement.classList.add(classItem));
  }

  if (options.attributes) {
    for(const attribute of Object.keys(options.attributes)) {
      domElement.setAttribute(attribute, options.attributes[attribute]);
    }
  }

  return domElement;
}

export const buildDOMFromString = (string) => {
  if(!string) throw new Error('YPError :: An html string is required');
  return (new DOMParser()).parseFromString(string, 'text/html').body.firstChild;
}

export const smoothScrollTo = (trigger, target) => {
  let targetPosition = target.offsetTop - 150;
  return trigger.scrollTop = targetPosition;
};

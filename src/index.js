const $ = (...args) => {
  if (typeof args[0] === "string") {
    const selector = args[0];
    const collection = document.querySelectorAll(selector);
    return new makeCollection(collection);
  } else if (args[0] instanceof HTMLElement) {
    const collection = [args[0]];
    return new makeCollection(collection);
  }
};

class makeCollection {
  constructor(el) {
    this.el = el;
  }
  text(string) {
    if (typeof string !== "undefined") {
      this.el.forEach((element) => {
        element.innerText = string;
      });
    } else {
      let re = "";
      this.el.forEach((element) => {
        re = element.innerText;
        return;
      });
      return re;
    }
  }
  html(string) {
    if (typeof string !== "undefined") {
      this.el.forEach((element) => {
        element.innerHTML = string;
      });
    } else {
      let re = "";
      this.el.forEach((element) => {
        re = element.innerHTML;
        return;
      });
      return re;
    }
  }
  each(callback) {
    this.el.forEach((element, i) => {
      const boundFn = callback.bind(element);
      boundFn(i, element);
    });
  }
  on(eventName, handler) {
    this.el.forEach((element) => {
      element.addEventListener(eventName, handler);
    });
  }
  css(...cssArgs) {
    if (typeof cssArgs[0] === "string") {
      const [property, value] = cssArgs;
      this.el.forEach((element) => {
        element.style[property] = value;
      });
    } else if (typeof cssArgs[0] === "object") {
      const cssProps = Object.entries(cssArgs[0]);
      this.el.forEach((element) => {
        cssProps.forEach(([property, value]) => {
          element.style[property] = value;
        });
      });
    }
  }
  show() {
    this.el.forEach((element) => {
      element.style["display"] = element.originalDisplay || "block";
    });
  }
  hide() {
    this.el.forEach((element) => {
      this.originalDisplay = element.style["display"];
      element.style["display"] = "none";
    });
  }
  remove() {
    this.el.forEach((element) => {
      element.remove();
    });
  }
  exist() {
    return this.el.length > 0 ? true : false;
  }
  focus() {
    this.el.forEach((element) => {
      element.focus();
    });
  }
  removeClass(className) {
    this.el.forEach((element) => {
      element.classList.remove(className);
    });
  }
  addClass(className) {
    this.el.forEach((element) => {
      element.classList.add(className);
    });
  }
  hasClass(className) {
    this.el.forEach((element) => {
      return element.classList.contains(className) ? true : false;
    });
  }
  attr(name, value) {
    if (typeof value !== "undefined") {
      this.el.forEach((element) => {
        element.setAttribute(name, value);
      });
    } else {
      let re = "";
      this.el.forEach((element) => {
        re = element.getAttribute(name);
        return;
      });
      return re;
    }
  }
  data(name, value) {
    if (typeof value !== "undefined") {
      this.el.forEach((element) => {
        element.setAttribute(`data-${name}`, value);
      });
    } else {
      let re = "";
      this.el.forEach((element) => {
        re = element.getAttribute(`data-${name}`);
        return;
      });
      return re;
    }
  }
  append(string) {
    this.el.forEach((element) => {
      element.innerHTML += string;
    });
  }
  val(value) {
    if (typeof value !== "undefined") {
      this.el.forEach((element) => {
        element.value = value;
      });
    } else {
      let re = "";
      this.el.forEach((element) => {
        re = element.value;
        return;
      });
      return re;
    }
  }
}

export default $;

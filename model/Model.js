import { IMAGE_LIST } from "./data.js";

class Model {
  #list = [];
  #id;

  constructor() {
    this.#list = IMAGE_LIST;
    this.#id = 0;
  }

  getList() {
    return this.#list;
  }

  getCurrentImage() {
    return this.#list[this.#id];
  }

  getCurrentIndex() {
    return this.#id;
  }

  setCurrentIndex(index) {
    if (index >= 0 && index < this.#list.length) {
      this.#id = index;
    }
  }

  next() {
    this.#id++;
    if (this.#id >= this.#list.length) {
      this.#id = 0;
    }
  }

  previous() {
    this.#id--;
    if (this.#id < 0) {
      this.#id = this.#list.length - 1;
    }
  }
}

export default Model;

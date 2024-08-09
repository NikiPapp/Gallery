class LargeImageView {
  #images;
  #parentElement;

  constructor(images, parentElement) {
    this.#images = images;
    this.#parentElement = parentElement;

    this.#assembleHtml();
  }

  #assembleHtml() {
    let html = '<ul class="slides">';

    this.#images.forEach((image, index) => {
      const prevIndex = index === 0 ? this.#images.length : index;
      const nextIndex = index === this.#images.length - 1 ? 1 : index + 2;
      html += `
        <input type="radio" name="radio-btn" id="img-${index + 1}" ${
        index === 0 ? "checked" : ""
      } />
        <li class="slide-container">
          <div class="slide">
            <img src="${image}" alt="Image ${index + 1}" />
          </div>
          <div class="nav">
            <label for="img-${prevIndex}" class="prev">&#x2039;</label>
            <label for="img-${nextIndex}" class="next">&#x203a;</label>
          </div>
        </li>
      `;
    });

    html += '<li class="nav-dots">';
    this.#images.forEach((_, index) => {
      html += `<label for="img-${index + 1}" class="nav-dot" id="img-dot-${
        index + 1
      }"></label>`;
    });
    html += "</li></ul>";

    this.#parentElement.innerHTML = html;
  }
}

export default LargeImageView;

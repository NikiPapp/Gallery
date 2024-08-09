import Model from "../model/Model.js";
import LargeImageView from "../view/LargeImageView.js";

class Controller {
  constructor() {
   
    const MODEL = new Model();
    const images = MODEL.getList(); 

   
    const LARGE_IMAGE_VIEW = new LargeImageView(images, document.querySelector(".largeImage"));

    
    window.addEventListener("left", () => {
      MODEL.previous();
      LARGE_IMAGE_VIEW.updateSelectedImage(MODEL.getCurrentIndex());
    });

    window.addEventListener("right", () => {
      MODEL.next();
      LARGE_IMAGE_VIEW.updateSelectedImage(MODEL.getCurrentIndex());
    });

    
    images.forEach((image, index) => {
      document.querySelector(`#img-dot-${index + 1}`).addEventListener("click", () => {
        MODEL.setCurrentIndex(index);
        LARGE_IMAGE_VIEW.updateSelectedImage(index);
      });
    });
  }
}

export default Controller;

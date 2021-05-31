import ModalImage from "react-modal-image"

import "./styles.css"
import { Lightbox } from "react-modal-image";


const ImagemModal = (prop) => {
  return(
    <div id="img">
      <ModalImage
        small={prop.smallImg}
        large={prop.largeImg}
        alt=""
      />

      {/* <Lightbox
        medium={prop.smallImg}
        large={prop.largeImg}
        alt="loading"
        // onClose={this.closeLightbox}
      /> */}

    </div>
  );
}

export default ImagemModal;
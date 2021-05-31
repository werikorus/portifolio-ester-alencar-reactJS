import ModalImage from "react-modal-image"
import "./styles.css"


const ImagemModal = (prop) => {
  return(
    <div id="img">
      <ModalImage
        small={prop.smallImg}
        medium={prop.largeImg}
        hideDownload={false}
        imageBackgroundColor={'nonse'}
        hideZoom={false}
        alt=""        
      />

    </div>
  );  
}

export default ImagemModal;
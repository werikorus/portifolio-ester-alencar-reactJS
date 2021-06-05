import ModalImage from "react-modal-image"
import "./styles.scss"

const ImagemModal = (prop) => {
  return(
    <div id="img">
      <ModalImage
        small={prop.smallImg}
        medium={prop.largeImg}
        hideDownload={true}
        imageBackgroundColor={'none'}
        hideZoom={true}
        alt=""        
      />    
    </div>
  );  
}

export default ImagemModal;
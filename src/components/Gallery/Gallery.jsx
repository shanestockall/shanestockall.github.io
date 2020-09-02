import React, { useState, useCallback } from "react";
import GalleryExport from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

function Gallery({ ...props }) {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
  
    const openLightbox = useCallback((event, { photo, index }) => {
      setCurrentImage(index);
      setViewerIsOpen(true);
    }, []);
  
    const closeLightbox = () => {
      setCurrentImage(0);
      setViewerIsOpen(false);
    };
    return (
        <div>
          <GalleryExport photos={photos} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photos.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
    );
}

export default withStyles(profilePageStyle)(Gallery);
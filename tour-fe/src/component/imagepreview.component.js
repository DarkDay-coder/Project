import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

export const ImagePriview = ({ url }) => {
   const onInit = () => {
      // console.log('light gallery');
   };
   return (
      <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
         <a href={url}>Preview Image</a>
      </LightGallery>
   );
};

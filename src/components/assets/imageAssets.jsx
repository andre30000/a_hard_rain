/* To handle image imports properly in a Vite project for both development and production, this is a module that maps identifiers to image imports. This file will export objects where keys are identifiers and values are the imported images */

import image1 from './images/1.png';
import image2 from './images/2.png';
import image3 from './images/3.png';

// Create an object mapping identifiers to images
const imageAssets = {
    "1": image1,
    "2": image2,
    "3": image3,
    // Add all other images following the same pattern
  };
  
  export default imageAssets;
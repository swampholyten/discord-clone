import React from "react";
import ServerIcon from "./ServerIcon";

import './mainStyle/GridStyle.css';

import imageLemon from '../../../src/assets/lemon.jpg'

  
  const GalleryGrid = () => {
    const images = [
      { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/aae834c6ea80fb90a5f6e65f76772d62b2f0e99da5ba3696b79dad8f8c7e714e?apiKey=3480b97b5ecf4f06880107a908fe7614&", alt: "Image 1" },
      { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/aff106fe446a9a60381e41dd5e51fba1785f06b8fb1a8db88fd6fadf25323ee6?apiKey=3480b97b5ecf4f06880107a908fe7614&", alt: "Image 2" },
      { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c7a6caca4056426790ccec85b102f1143e8ddfaea86869e2d15e34d2226c610a?apiKey=3480b97b5ecf4f06880107a908fe7614&", alt: "Image 3" },
      { src: imageLemon,alt:"Lemon"}
    ];
  
    return (
      <div className="galleryGrid">
        {images.map((image, index) => (
          <ServerIcon key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
    );
  };
  
  export default GalleryGrid;
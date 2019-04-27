import React from "react";
import ImageCard from "./ImageCard";
import "./ImageList.css";

const ImageList = props => {
  const image = props.images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-lists">{image}</div>;
};

export default ImageList;

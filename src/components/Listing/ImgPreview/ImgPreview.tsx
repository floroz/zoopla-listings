import React from "react";
import styles from "./ImgPreview.module.scss";

interface Props {
  images: string[];
}

const ImgPreview = (props: Props) => {
  return (
    <div>
      <img src={props.images[0]} alt="property" className={styles.img} />
    </div>
  );
};

export default ImgPreview;

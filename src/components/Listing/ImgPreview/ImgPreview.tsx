import React from "react";
import styles from "./ImgPreview.module.scss";
import { ReactComponent as CameraSVG } from "../../../icons/camera.svg";

interface Props {
  images: string[];
}

const ImgPreview = (props: Props) => {
  return (
    <div className={styles.container}>
      <img src={props.images[0]} alt="property" className={styles.img} />
      <div className={styles.camera}>
        <CameraSVG className={styles.svg} />
        <span>{props.images.length && props.images.length}</span>
      </div>
    </div>
  );
};

export default ImgPreview;

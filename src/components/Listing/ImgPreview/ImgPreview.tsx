import React from "react";
import styles from "./ImgPreview.module.scss";
import { ReactComponent as CameraSVG } from "../../../icons/camera.svg";

interface Props {
  images: string[];
  expired: boolean;
}

const ImgPreview = ({ images = [], expired = false }: Props) => {
  return (
    <div className={styles.container}>
      {expired && (
        <div className={styles.expired}>
          <span>Expired</span>
        </div>
      )}
      <img src={images[0]} alt="property" className={styles.img} />
      <div className={styles.camera}>
        <CameraSVG className={styles.svg} />
        <span>{images.length && images.length}</span>
      </div>
    </div>
  );
};

export default ImgPreview;

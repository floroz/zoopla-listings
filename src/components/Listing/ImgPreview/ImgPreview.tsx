import React from "react";
import styles from "./ImgPreview.module.scss";
import { ReactComponent as CameraSVG } from "../../../icons/camera.svg";

interface Props {
  images: string[];
  expired: boolean;
}

const ImgPreview = ({ images = [], expired = false }: Props) => {
  return (
    <figure className={styles.container} aria-label="house preview">
      {expired && (
        <div className={styles.expired}>
          <span>Expired</span>
        </div>
      )}
      <img src={images[0]} alt="rooms and overview" className={styles.img} />
      <div className={styles.camera}>
        <CameraSVG className={styles.svg} />
        <span>{images.length && images.length}</span>
      </div>
    </figure>
  );
};

export default ImgPreview;

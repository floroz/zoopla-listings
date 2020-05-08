import React from "react";
import { ReactComponent as LivingRoomSVG } from "../../../icons/armchair.svg";
import { ReactComponent as BathroomSVG } from "../../../icons/bathtub.svg";
import { ReactComponent as BedSVG } from "../../../icons/bed.svg";
import styles from "./IconsGroup.module.scss";

interface Props {
  beds?: number;
  bathrooms?: number;
  livingRoom?: number;
}

const IconsGroup = ({ beds = 1, bathrooms = 1, livingRoom = 1 }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.bedBox}>
        <BedSVG className={styles.bed} />
        <span>{beds}</span>
      </div>
      <div className={styles.bathBox}>
        <BathroomSVG className={styles.bathtub} />
        <span>{bathrooms}</span>
      </div>
      <div className={styles.livingBox}>
        <LivingRoomSVG className={styles.armchair} />
        <span>{livingRoom}</span>
      </div>
    </div>
  );
};

export default IconsGroup;

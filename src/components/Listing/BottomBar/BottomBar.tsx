import React from "react";
import { ReactComponent as StarSVG } from "../../../icons/star.svg";
import styles from "./BottomBar.module.scss";

interface Props {
  listed: string;
}

const BottomBar = (props: Props) => {
  let date = new Date(props.listed).toLocaleDateString();

  return (
    <div className={styles.bottomBar}>
      <div className={styles.date}>
        <span>Listed on: {date}</span>
      </div>
      <div className={styles.save}>
        <StarSVG className={styles.starSVG} />
        <span>Save </span>
      </div>
    </div>
  );
};

export default BottomBar;

import React from "react";
import { IPropertyListing } from "../../interfaces";
import styles from "./Listing.module.scss";
import { ReactComponent as StarSVG } from "../../icons/star.svg";

interface Props {
  property: IPropertyListing;
}

const Listing = ({ property }: Props) => {
  let date = new Date(property.listed).toLocaleDateString();

  return (
    <div className={styles.container}>
      <div className={styles.listing}>
        <div>
          <img src={property.images[0]} alt="property" className={styles.img} />
        </div>
        <div>Information</div>
      </div>
      <div className={styles.bottomBar}>
        <div className={styles.date}>
          <span>Listed on: {date}</span>
        </div>
        <div className={styles.save}>
          <StarSVG className={styles.starSVG} />
          <span>Save </span>
        </div>
      </div>
    </div>
  );
};

export default Listing;

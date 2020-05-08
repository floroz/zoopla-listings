import React from "react";
import { IPropertyListing } from "../../../interfaces";
import styles from "./Details.module.scss";
import { formatPrice } from "../../../utils/index";
import IconsGroup from "../IconsGroup/IconsGroup";

interface Props {
  property: IPropertyListing;
}

const Details = ({ property }: Props) => {
  let price = formatPrice(property.price);
  return (
    <div className={styles.details}>
      <div className={styles.price}>
        <h5>Guide price</h5>
        <h6>£{price}</h6>
      </div>
      <IconsGroup />
      <div>
        <p className={styles.info}>
          {property.beds} bed {property.type} for sale
        </p>
        <p className={styles.address}>
          {property.address}, {property.city}, {property.postcode}
        </p>
      </div>
      <button>Investment</button>
    </div>
  );
};

export default Details;

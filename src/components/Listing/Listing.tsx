import React from "react";
import ImgPreview from "./ImgPreview/ImgPreview";
import Details from "./Details/Details";
import BottomBar from "./BottomBar/BottomBar";
import { IPropertyListing } from "../../interfaces";
import styles from "./Listing.module.scss";

interface Props {
  property: IPropertyListing;
}

const Listing = ({ property }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.listing}>
        <ImgPreview images={property.images} />
        <Details property={property} />
      </div>
      <BottomBar listed={property.listed} />
    </div>
  );
};

export default Listing;

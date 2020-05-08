import React from "react";
import usePropertyListing from "../../hooks/usePropertyListing";
import { IPropertyListing } from "../../interfaces";
import Listing from "../Listing/Listing";

interface Props {}

const ManageListing = (props: Props) => {
  const { properties, retryFetch, loading } = usePropertyListing();

  return (
    <section>
      <h1>ManageListing</h1>
      <div>
        {!loading &&
          properties?.length > 0 &&
          properties.map((property: IPropertyListing) => <Listing />)}
      </div>
    </section>
  );
};

export default ManageListing;

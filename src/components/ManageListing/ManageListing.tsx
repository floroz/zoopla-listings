import React from "react";
import { usePropertyListing } from "../../hooks/usePropertyListing";
interface Props {}

const ManageListing = (props: Props) => {
  const { properties, setProperties } = usePropertyListing();

  return <div>ManageListing</div>;
};

export default ManageListing;

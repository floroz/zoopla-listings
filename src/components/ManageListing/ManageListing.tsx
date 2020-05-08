import React from "react";
import usePropertyListing from "../../hooks/usePropertyListing";
import { IPropertyListing } from "../../interfaces";
import Listing from "../Listing/Listing";
import ErrorHandler from "../ErrorHandler/ErrorHandler";
import styles from "./ManageListing.module.scss";

interface Props {}

const ManageListing = (props: Props) => {
  const { properties, retryFetch, loading, error } = usePropertyListing();

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1>Manage Listings</h1>
      </header>
      <div>
        {!loading &&
          !error &&
          properties?.length > 0 &&
          properties.map((property: IPropertyListing) => <Listing />)}
      </div>
      {loading && <div>Loading...</div>}
      {error && <ErrorHandler retryFetch={retryFetch} error={error} />}
    </main>
  );
};

export default ManageListing;

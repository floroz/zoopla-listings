import React from "react";
import usePropertyListing from "../../hooks/usePropertyListing";
import { IPropertyListing } from "../../interfaces";
import Listing from "../Listing/Listing";
import ErrorHandler from "../ErrorHandler/ErrorHandler";
import styles from "./ManageListing.module.scss";

interface Props {}

const ManageListing = (props: Props) => {
  const {
    properties,
    retryFetch,
    loading,
    error,
    showExpired,
    showLive,
    showAll,
  } = usePropertyListing();

  return (
    <main className={styles.main} data-testid="manage-listing">
      <header className={styles.header}>
        <h1>Manage Listings</h1>
      </header>
      <div className={styles.buttonGroup}>
        <button onClick={showExpired}>Show Expired Listings</button>
        <button onClick={showLive}>Show Live Listings</button>
        <button onClick={showAll}>Show All Listings</button>
      </div>
      <div>
        {!loading &&
          !error &&
          properties?.length > 0 &&
          properties.map((property: IPropertyListing) => (
            <Listing property={property} key={property.id} />
          ))}
      </div>
      {loading && <div>Loading...</div>}
      {error && <ErrorHandler retryFetch={retryFetch} error={error} />}
    </main>
  );
};

export default ManageListing;

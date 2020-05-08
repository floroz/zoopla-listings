import { useEffect, useState } from "react";
import { IPropertyListing } from "../interfaces/index";

const API_URL: string = process.env.REACT_APP_API || "http://localhost:4000";
const API_URL_PROPERTIES: string = `${API_URL}/properties`;

export const usePropertyListing = () => {
  const [properties, setProperties] = useState<null | IPropertyListing[]>(null);

  useEffect(() => {
    async function fetchProperties(propertiesUrl: string) {
      try {
        let res = await fetch(propertiesUrl);
        let json = await res.json();
        console.log(json);
      } catch (error) {}
    }

    fetchProperties(API_URL_PROPERTIES).then();
  }, []);

  return { properties, setProperties };
};

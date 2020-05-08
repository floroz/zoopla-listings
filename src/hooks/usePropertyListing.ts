import { useEffect, useReducer, useCallback } from "react";
import { IPropertyListing } from "../interfaces/index";

const API_URL: string = process.env.REACT_APP_API || "http://localhost:4000";
const API_URL_PROPERTIES: string = `${API_URL}/properties`;

enum FetchProperties {
  SUCCESS = "SUCCESS",
  START = "START",
  ERROR = "ERROR",
}

interface IAction {
  type: FetchProperties;
  payload?: any;
}

interface IPropertyListingState {
  properties: null | IPropertyListing[];
  loading: boolean;
  error: null | string;
}

const initialState: IPropertyListingState = {
  properties: null,
  loading: false,
  error: null,
};

function reducer(state: IPropertyListingState = initialState, action: IAction) {
  switch (action.type) {
    case FetchProperties.START:
      return {
        ...state,
        loading: true,
      };
    case FetchProperties.SUCCESS:
      return {
        ...state,
        loading: false,
        properties: action.payload,
      };
    case FetchProperties.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

const usePropertyListing = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchProperties = useCallback(async function () {
    try {
      dispatch({
        type: FetchProperties.START,
      });
      let res = await fetch(API_URL_PROPERTIES);
      let json = await res.json();
      dispatch({
        type: FetchProperties.SUCCESS,
        payload: json,
      });
    } catch (error) {
      dispatch({
        type: FetchProperties.ERROR,
        payload: error.message,
      });
      console.error(error.message);
    }
  }, []);

  useEffect(() => {
    fetchProperties().then();
  }, [fetchProperties]);

  return {
    properties: state.properties,
    retryFetch: fetchProperties,
    loading: state.loading,
  };
};

export default usePropertyListing;

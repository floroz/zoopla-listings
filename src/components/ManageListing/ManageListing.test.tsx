import React from "react";
import ManageListings from "./ManageListing";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render } from "@testing-library/react";
import fetchMock, { enableFetchMocks } from "jest-fetch-mock";
import jsonResponse from "../../../db.json";
import { act } from "react-dom/test-utils";
enableFetchMocks();

let renderFn = (component, options = {}) => {
  let history = createMemoryHistory();

  return render(<Router history={history}>{component}</Router>, { ...options });
};

describe("<ManageListings />", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test("should render without error ", () => {
    fetchMock.mockResponse(() => Promise.resolve(JSON.stringify(jsonResponse)));

    let { getByTestId } = renderFn(<ManageListings />);

    expect(getByTestId(/manage-listing/i)).toBeDefined();
  });

  test("should correctly call the api once to fetch the properties", async () => {
    fetchMock.mockResponse(() => Promise.resolve(JSON.stringify(jsonResponse)));

    await act(async () => renderFn(<ManageListings />));

    expect(fetchMock).toHaveBeenCalled();
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});

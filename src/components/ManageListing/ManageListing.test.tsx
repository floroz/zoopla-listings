import React from "react";
import ManageListings from "./ManageListing";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, RenderResult, wait } from "@testing-library/react";
import fetchMock, { enableFetchMocks } from "jest-fetch-mock";
import jsonResponse from "../../../db.json";

enableFetchMocks();

let renderFn = (component: React.ReactElement, options = {}): RenderResult => {
  let history = createMemoryHistory();

  return render(<Router history={history}>{component}</Router>, { ...options });
};

describe("<ManageListings />", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test("should render without error ", async () => {
    fetchMock.mockResponse(() => Promise.resolve(JSON.stringify(jsonResponse)));

    let { getByTestId }: RenderResult = renderFn(<ManageListings />);

    await wait();

    expect(getByTestId(/manage-listing/i)).toBeDefined();
  });

  test("should correctly call the api once to fetch the properties", async () => {
    fetchMock.mockResponse(() => Promise.resolve(JSON.stringify(jsonResponse)));

    renderFn(<ManageListings />);

    await wait();

    expect(fetchMock).toHaveBeenCalled();
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});

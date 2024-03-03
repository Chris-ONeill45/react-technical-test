import React from "react";
import SearchResults from "../components/SearchResults";
import { render } from "@testing-library/react";

describe("Search-Results", () => {
  const { asFragment } = render(<SearchResults />);

  it("renders corrctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });
});

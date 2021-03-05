import React from "react";
import { render } from "@testing-library/react";
import Autocomplete from "./Autocomplete";

test("renders autocomplete", () => {
  render(
    <Autocomplete
      backgroundColor="#ffffff"
      options={[]}
      onSelectIssue={() => {}}
      textChange={() => {}}
    />
  );
});

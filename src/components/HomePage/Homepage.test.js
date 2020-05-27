import React from "react";
import { shallow } from "enzyme";
import Homepage from "./Homepage";

it("renders without crashing", () => {
  shallow(<Homepage />);
});

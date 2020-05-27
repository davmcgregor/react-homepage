import React from "react";
import { shallow } from "enzyme";
import FormModal from "./FormModal";

it("renders without crashing", () => {
  shallow(<FormModal />);
});

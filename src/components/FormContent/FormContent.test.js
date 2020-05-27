import React from "react";
import { shallow } from "enzyme";
import FormContent from "./FormContent";
it("renders without crashing", () => {
  shallow(<FormContent />);
});

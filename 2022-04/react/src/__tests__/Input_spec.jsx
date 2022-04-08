import React from "react";
import { shallow } from "enzyme";

import Input from "../component/Input";

describe("<Input>", () => {
  it("renders without crashing", () => {
    expect(() => {
      shallow(<Input />);
    }).not.toThrow();
  });
});

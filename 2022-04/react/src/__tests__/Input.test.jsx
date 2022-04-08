import React from "react";
import ReactDOM from "react-dom";
import Input from "../component/Input";

describe("<Input>", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Input />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

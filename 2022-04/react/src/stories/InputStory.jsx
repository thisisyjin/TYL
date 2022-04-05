import React from "react";
import { setAddon, storiesOf } from "@storybook/react";
import JSXAddon from "storybook-addon-jsx";
import { action } from "@storybook/addon-actions";

import Input from "../component/Input";
setAddon(JSXAddon);

storiesOf("Input", module)
  .add("기본 설정", () => <Input name="name" />)
  .add("label 예제", () => <Input name="name" label="이름" />)
  .add("onChange 예제", () => (
    <Input name="name" onChange={action("onChange 이벤트 발생")} />
  ));

import React from "react";
import { storiesOf } from "@storybook/react";

import Text from "../component/Test";

storiesOf("Text", module)
  .add("기본 설정", () => <Text>안녕하세요</Text>)
  .add("large", () => <Text large>large</Text>)
  .add("xlarge", () => <Text xlarge>large</Text>)
  .add("small", () => <Text small>small</Text>)
  .add("xsmall", () => <Text xsmall>xsmall</Text>)
  .add("primary", () => <Text primary>primary</Text>)
  .add("secondary", () => <Text secondary>secondary</Text>)
  .add("primary + large", () => (
    <Text primary large>
      primary+large
    </Text>
  ));

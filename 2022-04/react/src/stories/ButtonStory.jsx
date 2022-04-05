import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "../component/Button";

storiesOf("Button", module)
  .add("기본설정", () => <Button>전송</Button>)
  .add("large", () => <Button large>전송</Button>)
  .add("xlarge", () => <Button xlarge>전송</Button>)
  .add("small", () => <Button small>전송</Button>)
  .add("xsmall", () => <Button xsmall>전송</Button>)
  .add("primary", () => <Button primary>전송</Button>)
  .add("secondary", () => <Button secondary>전송</Button>)
  .add("primary+large", () => (
    <Button primary large>
      전송
    </Button>
  ));

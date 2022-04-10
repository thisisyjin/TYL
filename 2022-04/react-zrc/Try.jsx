// BullsAndCows.jsx 로부터 props를 전달받는다.
// memo를 이용하여 Hooks에서도 PureComponent 역할을 하도록.

import React, { memo } from "react";

const Try = memo(({ tryInfo, index }) => {
  return (
    <li key={`${index}차 시도:`}>
      {tryInfo.try} : {tryInfo.result}
    </li>
  );
});

export default Try;

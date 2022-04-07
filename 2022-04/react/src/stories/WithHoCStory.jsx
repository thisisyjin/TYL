import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../component/Button';
import Text from '../component/Test';
import withHoC from '../component/withHoC';

const ButtonWithHoC = withHoC(Button);
const TextWithHoC = withHoC(Text);

storiesOf('WithHoC', module)
  .add('기본 설정', () => (
    <div>
      <ButtonWithHoC>안녕</ButtonWithHoC>
      <TextWithHoC>하세요</TextWithHoC>
    </div>
  ))
  .add('large 예제', () => (
    <div>
      <ButtonWithHoC large>안녕</ButtonWithHoC>
      <TextWithHoC large>하세요</TextWithHoC>
    </div>
  ));

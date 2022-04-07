import React from 'react';
import { storiesOf } from '@storybook/react';

import Text from '../component/Test';
import Button from '../component/Button';
import withLoading from '../component/withLoading';

const TextWithLoading = withLoading('텍스트 로딩중')(Text);
const ButtonWithLoading = withLoading(<Button disabled>버튼 로딩중</Button>)(
  Button
);

storiesOf('WithLoading', module)
  .add('기본설정', () => (
    <div>
      <ButtonWithLoading>안녕</ButtonWithLoading>
      <TextWithLoading>하세요</TextWithLoading>
    </div>
  ))
  .add('isLoading시', () => (
    <div>
      <ButtonWithLoading isLoading>안녕</ButtonWithLoading>
      <TextWithLoading isLoading>하세요</TextWithLoading>
    </div>
  ));

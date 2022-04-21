import React, { useCallback, memo } from 'react';
import { CLICK_CELL } from './TicTacToe';

const Td = memo(({ rowIndex, cellIndex, dispatch, cellData }) => {
  console.log('Td render');

  const onClickTd = useCallback(() => {
    if (cellData) {
      return; // 셀 데이터가 존재하면 빠져나옴 -> 한번 클릭한 셀은 변경되지 않게
    }
    dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex });
  }, [cellData]);

  return <td onClick={onClickTd}>{cellData}</td>;
});

export default Td;

import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from 'react';
import Ball from './Ball';

const getWinNumbers = () => {
  console.log('getWinNums');
  const candidate = Array(45)
    .fill()
    .map((_, i) => i + 1);
  let shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(
      candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]
    );
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);

  return [...winNumbers, bonusNumber];
};

const Lotto = () => {
  const lottoNumbers = useMemo(() => getWinNumbers(), []);
  // useEffect, useMemo, useCallback은 모두 두번째 인자 [deps]가 존재한다.
  const [winNumbers, setWinNumbers] = useState(lottoNumbers);
  const [winBalls, setWinBalls] = useState([]);
  const [bonus, setBonus] = useState(null);
  const [redo, setRedo] = useState(false);

  const timeouts = useRef([]);

  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      // componentDidUpdate에서 실행할 코드
    }
  }, [바뀌는 값]) // componentDidUpdate에서만 사용 가능하게

  useEffect(() => {
    console.log('useEffect');
    if (winBalls.length === 0) {
      for (let i = 0; i < winNumbers.length - 1; i++) {
        timeouts.current[i] = setTimeout(() => {
          setWinBalls((prevWinBalls) => [...prevWinBalls, winNumbers[i]]);
        }, (i + 1) * 1000);
      }
      timeouts.current[6] = setTimeout(() => {
        setBonus(winNumbers[6]);
        setRedo(true);
      }, 7000);
      return () => {
        // componentWillUnmount 역할
        timeouts.current.forEach((v) => {
          clearTimeout(v);
        });
      };
    }
  }, [timeouts.current]); // ComponentDidMount + ComponentDidUpdate 동시에 수행

  const onClickRedo = useCallback(() => {
    console.log(winNumbers);
    setWinNumbers(getWinNumbers());
    setWinBalls([]);
    setBonus(null);
    setRedo(false);

    timeouts.current = [];
  }, [winNumbers]);

  return (
    <>
      <div>당첨 숫자</div>
      <div id="결과창">
        {winBalls.map((v) => (
          <Ball key={v} number={v} />
        ))}
      </div>
      <div>보너스!</div>
      {bonus && <Ball number={bonus} />}
      {redo && <button onClick={onClickRedo}>한번 더!</button>}
    </>
  );
};

export default Lotto;

import React from 'react';
import { useState, useRef, memo } from 'react';
import Try from './Try';

function getNumbers() {
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const answerArr = [];
  for (let i = 0; i < 4; i++) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];

    answerArr.push(chosen);
  }
  return answerArr; // = answer = [2,5,6,1]
}

const BullsAndCows = memo(() => {
  const [answer, setAnswer] = useState(getNumbers());
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const [tries, setTries] = useState([]); // push쓰면 원본 바뀌므로 ...로 추가해주기

  let inputRef = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();

    if (tries.length >= 9) {
      setResult(`게임오버! 정답은 ${answer.join('')} 였습니다.`);
      setValue('');
      setTries([]);
      setAnswer(getNumbers());
    } else {
      if (value == answer.join('')) {
        setResult('홈런! 정답입니다.');
        setTries([...tries, { try: value, result: '홈런!' }]);
        setValue('');
      } else {
        let strike = 0;
        let ball = 0;
        const valueArr = value.split('').map((v) => parseInt(v)); // [1,3,5,7]
        console.log(answer, valueArr);

        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 4; j++) {
            if (valueArr[i] === answer[j]) {
              if (i === j) {
                strike++;
              } else {
                ball++;
              }
            }
          }
        }
        setResult(`${strike}스트라이크 ${ball}볼`);
        setTries([
          ...tries,
          { try: value, result: `${strike}스트라이크 ${ball}볼` },
        ]);
        console.log(tries);
        setValue('');
        inputRef.current.focus();
      }
    }
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <h1>🎲숫자야구🏏</h1>
      <p>남은 횟수: {10 - tries.length}회</p>
      <form onSubmit={onSubmitForm}>
        <input
          required
          type="number"
          maxLength={4}
          value={value}
          placeholder="숫자를 맞혀보세요"
          onChange={onChangeInput}
          ref={inputRef}
        />
        <button>입력</button>
      </form>
      <div>{result}</div>
      🔎 로그
      <ul>
        {tries.map((v, index) => (
          <Try key={`${index}차시도`} tryInfo={v} />
        ))}
      </ul>
    </>
  );
});

export default BullsAndCows;

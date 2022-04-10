import React, { useState, useRef } from "react";

const GuGuDan = () => {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  let inputRef = useRef(null);

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (parseInt(value) === first * second) {
      setResult((prevResult) => {
        return "정답입니다! " + value;
      });
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue("");
      inputRef.current.focus();
    } else {
      setResult("❌ 오답입니다");
      setValue("");
      inputRef.current.focus();
    }
  };

  const onInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <h1>💯구구단 게임💯</h1>
      <div>
        📃 {first} 곱하기 {second} 는?
      </div>
      <form onSubmit={onFormSubmit}>
        <input
          ref={inputRef}
          type="number"
          required
          placeholder="정답 입력"
          value={value}
          onChange={onInputChange}
        />
        <button type="submit">입력</button>
      </form>
      <div>{result}</div>
    </>
  );
};

export default GuGuDan;

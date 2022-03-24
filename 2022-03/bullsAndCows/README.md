# 220318
## TIL : React.js

## 🎲 Bulls And Cows (숫자야구)

> 4자리의 숫자를 임의로 정한 뒤, 4자리의 숫자를 불러서 결과를 확인한다. 
그리고 그 결과를 토대로 상대가 적은 숫자를 예상한 뒤 맞힌다.  
>사용되는 숫자는 0에서 9까지 서로 다른 숫자이다. (경우에 따라 0은 미사용 가능)
>
> 숫자는 맞지만 위치가 틀렸을 때는 볼.
숫자와 위치가 전부 맞으면 스트라이크.
숫자와 위치가 전부 틀리면 아웃.



### **🚀추가할 것**

> `tries` 화면에 구현 (여태 기록 로그 남게)
  - 주석남긴 부분(li로 map해서 / 배열형태로)
  
  
> `count` state 추가해서 10번안에 맞추게
  - do-while이나 while-if(){break} 쓰는게 좋을듯.
  - count++ 위치 주의할것.
  
<br>


***



### 📝 tries 화면에 표시

> 🎨 **result**
![](https://images.velog.io/images/thisisyjin/post/f7c12749-6cc5-4de3-b3f4-988f2a48d1df/image.png)


> 📃 **Details**
>```jsx
// else문 내부 - setResult 후
setTries([
        ...tries,
        { try: value, result: `${strike}스트라이크 ${ball}볼` },
      ]);
```
>```jsx
// return 부분
<ul>
    🔎 로그
    {tries.map(el => (
      <li key={el.try}>
        {el.try} : {el.result}
      </li>
    ))}
</ul>
```




> **🔨 문제점**
```jsx
 { try: value, result: `${strike}스트라이크 ${ball}볼` } 
```
```jsx
  // 🔻 이렇게 하니까 에러남
 { try: value, result: result },
```
- 이게 result값이 submit해서 바뀐 상태기때문에,
다음 submit시 지금 result값이 반영되므로
어쩔 수 없이 `strike`, `ball`변수로 이렇게 해야한다. 
아니면 지금 result를 const currentResult = result 이런식으로 복사해서 쓰거나. (~~그게 그거다~~)


<br>


***

### 📝 count limit + 화면표시

총 10회 안에 맞히도록 횟수를 제한하고,
화면에 현재 남은 횟수를 표시해보자.

> **🙋‍♂️(Limit) 10회가 넘어가면 ?**  
1. result에 '게임오버'를 출력하고, 
답이 뭐였는지 알려준다.
2. tries를 빈 배열 [] 로 초기화하고,
3. answer(정답 숫자)를 다시 뽑는다.

> 🎨 **result**
![](https://images.velog.io/images/thisisyjin/post/7dfe9f93-61e0-4182-8b5f-fbe32eee2944/exMPL.gif)

> 📃 **Details**
```jsx
// if-else 구조 
if (tries.length >= 9) { // tries.length가 9면 > 이전 로그가 9개니까 지금이 10회째 시도임!
      setResult(`게임오버! 정답은 ${answer.join("")} 였습니다.`);
      setValue("");
      setTries([]);
      setAnswer(getNumbers());
    } else {
      if (value == answer.join("")) {
        // 정답이면 
      } else {
        // 오답이면 - strike, ball 
      }
    }
```
```jsx
// 남은 횟수 표시 (10-tries.length)
<p>남은 횟수: {10 - tries.length}회</p>
```

***



### 📝 Logic + if-else 구조 변경

** 🙋‍♂️ strike, ball 판단 로직 변경**

> ✅ 방법 1 - **이걸로 수정!**
```jsx
// 반복 변수 하나로 OK. 
for (let i = 0; i < 4; i++) {
          if (valueArr[i] === answer[i]) {
            strike++;
          } else if (answer.includes(valueArr[i])) { // 포함하는지
            ball++;
          }
```
> ✅ 방법 2 - **기존 방법**
```jsx
// 반복 변수(i,j) 두개 필요
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
```

<br>


** 🙋‍♂️ if-else 구조 변경**

>- 내가 작성했던 코드
   - 나는 먼저 횟수가 10회미만인지를 검사했었는데,
   이는 10회째에 맞춰도 게임오버가 된다.

***

### 📃 하위 컴포넌트 쪼개기
<br>


🔻 **BullsAndCows.jsx**
- tries의 각 요소를 `tryInfo`라는 prop으로 보냄.
```jsx
// tries.map 부분
<ul>
        🔎 로그
        {tries.map((v, index) => (
          <Try key={`${index}차시도`} tryInfo={v} />
        ))}
</ul>
```
🔻 **Try.jsx**
- `props`를 받아와서 사용
```jsx
import React from "react";

const Try = ({ tryInfo, index }) => {
  return (
    <li key={`${index}차 시도:`}>
      {tryInfo.try} : {tryInfo.result}
    </li>
  );
};

export default Try;

```

>❗ **참고** 
원래 `index`를 key로 사용하면 안되지만,
이런 경우에는 사용해도 상관 없음. 

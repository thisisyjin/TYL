# 220318
## TIL : React.js

## ๐ฒ Bulls And Cows (์ซ์์ผ๊ตฌ)

> 4์๋ฆฌ์ ์ซ์๋ฅผ ์์๋ก ์ ํ ๋ค, 4์๋ฆฌ์ ์ซ์๋ฅผ ๋ถ๋ฌ์ ๊ฒฐ๊ณผ๋ฅผ ํ์ธํ๋ค. 
๊ทธ๋ฆฌ๊ณ  ๊ทธ ๊ฒฐ๊ณผ๋ฅผ ํ ๋๋ก ์๋๊ฐ ์ ์ ์ซ์๋ฅผ ์์ํ ๋ค ๋งํ๋ค.  
>์ฌ์ฉ๋๋ ์ซ์๋ 0์์ 9๊น์ง ์๋ก ๋ค๋ฅธ ์ซ์์ด๋ค. (๊ฒฝ์ฐ์ ๋ฐ๋ผ 0์ ๋ฏธ์ฌ์ฉ ๊ฐ๋ฅ)
>
> ์ซ์๋ ๋ง์ง๋ง ์์น๊ฐ ํ๋ ธ์ ๋๋ ๋ณผ.
์ซ์์ ์์น๊ฐ ์ ๋ถ ๋ง์ผ๋ฉด ์คํธ๋ผ์ดํฌ.
์ซ์์ ์์น๊ฐ ์ ๋ถ ํ๋ฆฌ๋ฉด ์์.



### **๐์ถ๊ฐํ  ๊ฒ**

> `tries` ํ๋ฉด์ ๊ตฌํ (์ฌํ ๊ธฐ๋ก ๋ก๊ทธ ๋จ๊ฒ)
  - ์ฃผ์๋จ๊ธด ๋ถ๋ถ(li๋ก mapํด์ / ๋ฐฐ์ดํํ๋ก)
  
  
> `count` state ์ถ๊ฐํด์ 10๋ฒ์์ ๋ง์ถ๊ฒ
  - do-while์ด๋ while-if(){break} ์ฐ๋๊ฒ ์ข์๋ฏ.
  - count++ ์์น ์ฃผ์ํ ๊ฒ.
  
<br>


***



### ๐ tries ํ๋ฉด์ ํ์

> ๐จ **result**
![](https://images.velog.io/images/thisisyjin/post/f7c12749-6cc5-4de3-b3f4-988f2a48d1df/image.png)


> ๐ **Details**
>```jsx
// else๋ฌธ ๋ด๋ถ - setResult ํ
setTries([
        ...tries,
        { try: value, result: `${strike}์คํธ๋ผ์ดํฌ ${ball}๋ณผ` },
      ]);
```
>```jsx
// return ๋ถ๋ถ
<ul>
    ๐ ๋ก๊ทธ
    {tries.map(el => (
      <li key={el.try}>
        {el.try} : {el.result}
      </li>
    ))}
</ul>
```




> **๐จ ๋ฌธ์ ์ **
```jsx
 { try: value, result: `${strike}์คํธ๋ผ์ดํฌ ${ball}๋ณผ` } 
```
```jsx
  // ๐ป ์ด๋ ๊ฒ ํ๋๊น ์๋ฌ๋จ
 { try: value, result: result },
```
- ์ด๊ฒ result๊ฐ์ด submitํด์ ๋ฐ๋ ์ํ๊ธฐ๋๋ฌธ์,
๋ค์ submit์ ์ง๊ธ result๊ฐ์ด ๋ฐ์๋๋ฏ๋ก
์ด์ฉ ์ ์์ด `strike`, `ball`๋ณ์๋ก ์ด๋ ๊ฒ ํด์ผํ๋ค. 
์๋๋ฉด ์ง๊ธ result๋ฅผ const currentResult = result ์ด๋ฐ์์ผ๋ก ๋ณต์ฌํด์ ์ฐ๊ฑฐ๋. (~~๊ทธ๊ฒ ๊ทธ๊ฑฐ๋ค~~)


<br>


***

### ๐ count limit + ํ๋ฉดํ์

์ด 10ํ ์์ ๋งํ๋๋ก ํ์๋ฅผ ์ ํํ๊ณ ,
ํ๋ฉด์ ํ์ฌ ๋จ์ ํ์๋ฅผ ํ์ํด๋ณด์.

> **๐โโ๏ธ(Limit) 10ํ๊ฐ ๋์ด๊ฐ๋ฉด ?**  
1. result์ '๊ฒ์์ค๋ฒ'๋ฅผ ์ถ๋ ฅํ๊ณ , 
๋ต์ด ๋ญ์๋์ง ์๋ ค์ค๋ค.
2. tries๋ฅผ ๋น ๋ฐฐ์ด [] ๋ก ์ด๊ธฐํํ๊ณ ,
3. answer(์ ๋ต ์ซ์)๋ฅผ ๋ค์ ๋ฝ๋๋ค.

> ๐จ **result**
![](https://images.velog.io/images/thisisyjin/post/7dfe9f93-61e0-4182-8b5f-fbe32eee2944/exMPL.gif)

> ๐ **Details**
```jsx
// if-else ๊ตฌ์กฐ 
if (tries.length >= 9) { // tries.length๊ฐ 9๋ฉด > ์ด์  ๋ก๊ทธ๊ฐ 9๊ฐ๋๊น ์ง๊ธ์ด 10ํ์งธ ์๋์!
      setResult(`๊ฒ์์ค๋ฒ! ์ ๋ต์ ${answer.join("")} ์์ต๋๋ค.`);
      setValue("");
      setTries([]);
      setAnswer(getNumbers());
    } else {
      if (value == answer.join("")) {
        // ์ ๋ต์ด๋ฉด 
      } else {
        // ์ค๋ต์ด๋ฉด - strike, ball 
      }
    }
```
```jsx
// ๋จ์ ํ์ ํ์ (10-tries.length)
<p>๋จ์ ํ์: {10 - tries.length}ํ</p>
```

***



### ๐ Logic + if-else ๊ตฌ์กฐ ๋ณ๊ฒฝ

** ๐โโ๏ธ strike, ball ํ๋จ ๋ก์ง ๋ณ๊ฒฝ**

> โ ๋ฐฉ๋ฒ 1 - **์ด๊ฑธ๋ก ์์ !**
```jsx
// ๋ฐ๋ณต ๋ณ์ ํ๋๋ก OK. 
for (let i = 0; i < 4; i++) {
          if (valueArr[i] === answer[i]) {
            strike++;
          } else if (answer.includes(valueArr[i])) { // ํฌํจํ๋์ง
            ball++;
          }
```
> โ ๋ฐฉ๋ฒ 2 - **๊ธฐ์กด ๋ฐฉ๋ฒ**
```jsx
// ๋ฐ๋ณต ๋ณ์(i,j) ๋๊ฐ ํ์
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


** ๐โโ๏ธ if-else ๊ตฌ์กฐ ๋ณ๊ฒฝ**

>- ๋ด๊ฐ ์์ฑํ๋ ์ฝ๋
   - ๋๋ ๋จผ์  ํ์๊ฐ 10ํ๋ฏธ๋ง์ธ์ง๋ฅผ ๊ฒ์ฌํ์๋๋ฐ,
   ์ด๋ 10ํ์งธ์ ๋ง์ถฐ๋ ๊ฒ์์ค๋ฒ๊ฐ ๋๋ค.

***

### ๐ ํ์ ์ปดํฌ๋ํธ ์ชผ๊ฐ๊ธฐ
<br>


๐ป **BullsAndCows.jsx**
- tries์ ๊ฐ ์์๋ฅผ `tryInfo`๋ผ๋ prop์ผ๋ก ๋ณด๋.
```jsx
// tries.map ๋ถ๋ถ
<ul>
        ๐ ๋ก๊ทธ
        {tries.map((v, index) => (
          <Try key={`${index}์ฐจ์๋`} tryInfo={v} />
        ))}
</ul>
```
๐ป **Try.jsx**
- `props`๋ฅผ ๋ฐ์์์ ์ฌ์ฉ
```jsx
import React from "react";

const Try = ({ tryInfo, index }) => {
  return (
    <li key={`${index}์ฐจ ์๋:`}>
      {tryInfo.try} : {tryInfo.result}
    </li>
  );
};

export default Try;

```

>โ **์ฐธ๊ณ ** 
์๋ `index`๋ฅผ key๋ก ์ฌ์ฉํ๋ฉด ์๋์ง๋ง,
์ด๋ฐ ๊ฒฝ์ฐ์๋ ์ฌ์ฉํด๋ ์๊ด ์์. 

# 📰 News-Viewer App

## 🚀 스택

- `react`
- `javaScript`
- `styled-components` 
- `axios` (API - GET)


## ⚙️ Setting

``` bash
$ git clone https://github.com/thisisyjin/news-viewer.git

$ npm install

$ npm start || yarn start
```

## ⚡️ dependencies
- `create-react-app`


``` js
"dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^13.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.27.2",
    "react": "^18.1.0",
    "react-dom": "^18.1.0",
    "react-router-dom": "^6.3.0",
    "react-scripts": "5.0.1",
    "styled-components": "^5.3.5",
    "web-vitals": "^2.1.0"
  },
```


## 📁 구조

``` 
├── public
└── src
    ├── lib
    │     └── usePromise
    ├── components
    │   ├── pages
    │   │     └── NewsPage
    │   ├── Categories
    │   ├── NewsItem
    │   └── NewsList
    ├── App
    └── index
```


## EXAMPLE

- 외부 API 불러오기 (axios.get)
- 동적 URL
- styled components (`styled`, `css`)
- custom Hook (usePromise)

![May-01-2022 14-47-51](https://user-images.githubusercontent.com/89119982/166136440-633bffbb-6111-40b1-8877-162aac543ea2.gif)



### REF

- [newsAPI](https://newsapi.org/)
- [styled-components](https://styled-components.com/)
- [axios](https://axios-http.com/kr/docs/intro)
- [Ref Book](https://thebook.io/080203/)

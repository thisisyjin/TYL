import axios from 'axios';

const client = axios.create();
// axios 인스턴스 생성

/* 예시

// API 주소 다른곳으로 사용시
client.defaults.baseURL = 'https://external-api-server.com/'

// 헤더 설정
client.defaults.headers.common['Authorization'] = 'Bearer a1b2c3d4';

// 인터셉터 설정
axios.intercepter.response.use({
    respoonse => {
        return response;
    },
    error => {
        return  Promise.reject(error);
    }
})

*/

export default client;

const express = require('express');
const bodyParser = require('body-parser');
const example = require('someModule'); //외부모듈 불러오기 

const app = express();

//Content-Type이 application/json 인 HTTP 요청의 바디를 파싱 할 수 있도록 설정
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello CoronaBoard!' });
});

const port = process.env.PORT || 8080; // 기본 값을 8080으로 지정

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});

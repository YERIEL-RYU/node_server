const express = require('express');
const cors = require('cors');

const app = express();

//원하는 포트넘버로 변경
const port = 3001;

app.get('/', (req, res)=>{
  res.send('Hello, Express')
});

app.listen(port, ()=>{
  console.log(port, 'waiting your order');
});
